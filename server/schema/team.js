import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    teams: [Team]
  }

  extend type Mutation {
    confirmTeam(team: String!): String

    createTeam(teamName: String!, id: Int, image: String): Team

    joinTeam(player: String, teamName: String): Team

    deleteTeam(teamName: String!): String

    leaveTeam(teamName: String, login: String): Team

    acceptTeam(player: String, teamName: String): Team
  }

  type Team {
    captainId: Int
    teamName: String
    playerId: Int
    captainApproved: Boolean
    playerApproved: Boolean
    image: String
  }

  type Subscription {
    playerJoined: PlayerJoined
  }
  type PlayerJoined {
    teamName: String
  }
`;
