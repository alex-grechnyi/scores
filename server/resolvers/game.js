import {combineResolvers} from "graphql-resolvers";

import {isAuthenticated} from "./authorization";

export default {
    Query: {
        games: async (user, args, {models}) => await models.Games.findAll()
    },

    Mutation: {
        create: combineResolvers(
            isAuthenticated,
            async (parent, {team1, team2, score1, score2, date}, {models, me}) => await models.Games.create({
                team1, team2, score1, score2, date,
                approved: false
            })
        ),
        approve: combineResolvers(
            isAuthenticated,
            async (parent, {id}, {models, me}) => await models.Games.update({
                approved: true
            }, {where: {id}})
        ),
        delete: combineResolvers(
            isAuthenticated,
            async (parent, {id}, {models, me}) => {
                await models.Games.destroy({ where: {id}});
                return "success"
            })
    }
};
