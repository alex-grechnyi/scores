import { combineResolvers } from "graphql-resolvers";

import { isAuthenticated } from "./authorization";

export default {
  Query: {
    games: async (parent, args, { models }) => await models.Games.findAll(),
    teamGames: async (parent, { team }, { models }) =>
      await models.Games.findAll({
        where: { team2: team, approved: false }
      })
  },

  Mutation: {
    createGame: combineResolvers(
      isAuthenticated,
      async (parent, { team1, team2, score1, score2, date }, { models, me }) =>
        await models.Games.create({
          team1,
          team2,
          score1,
          score2,
          date,
          approved: false
        })
    ),
    approveGame: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models, me }) =>
        await models.Games.update(
          {
            approved: true
          },
          { where: { id } }
        )
    ),
    deleteGame: combineResolvers(
      isAuthenticated,
      async (parent, { id }, { models, me }) => {
        await models.Games.destroy({ where: { id } });
        return "success";
      }
    )
  }
};
