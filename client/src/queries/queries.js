import gql from 'graphql-tag';

export const USER = {
  GET_ME: gql`
    query {
      me {
        userName
        login
        teamName
        isCaptain
      }
    }
  `,
  SIGN_UP: gql`
  mutation($userName: String!, $login: String!, $password: String!) {
    signUp(userName: $userName, login: $login, password: $password) {
      token
    }
  }
`
};

export const TEAM = {
  GET_TEAMS: gql`
    query {
      teams {
        captainId
        playerId
        teamName
        captainApproved
        playerApproved
        image
      }
    }
  `,
};

export const GAME = {
  GET_GAMES: gql`
    query {
      games {
        team1
        team2
        score1
        score2
        approved
        date
      }
    }
  `,
  GET_TEAM_GAMES: gql`
    query($team: String!) {
      teamGames(team: $team) {
        team1
        team2
        score1
        score2
        approved
        date
      }
    }
  `,
};
