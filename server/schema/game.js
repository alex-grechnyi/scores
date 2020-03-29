import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    games: [Game]
    
    teamGames(team: String!): [Game]
  }

  extend type Mutation {
    createGame(team1: String!, team2: String!, score1: String!, score2: String!, date: Date!): Game

    approveGame(id: String): Game
    
    deleteGame(id: String!): String
  }
  
  scalar Date

  type Game {
    team1: String
    team2: String
    score1: String
    score2: String
    approved: Boolean
    date: Date
  }
`;
