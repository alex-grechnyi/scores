import { Route, Router, Switch } from 'react-router';
import history from '../../constants/history';
// import ApproveGames from "../modal/ApproveGames/ApproveGames";
// import GameCreate from "../modal/GameCreate/GameCreate";
// import Notification from "../notification/Notification";
// import Register from "../registerPage";
// import CreateTeam from "../modal/CreateTeam/createTeam";
// import ViewTeam from "../modal/ViewTeam/ViewTeam";
// import InvitePlayer from "./components/modal/InvitePlayer/ChoosePlayer";
// import Home from "../homePage";
import React from 'react';
import ViewTeamPlayer from '../modal/ViewTeam/ViewTeamPlayer';
import withSession from '../session/session';
import { ROUTES } from '../../constants/routes.const';
import { Landing, SignUpPage, SignInPage } from '../../pages';

const App = ({ session, refetch }) => (
  <Router history={history}>
    <Switch>
      <Route

        path={ROUTES.SIGN_IN}
        component={() => <SignInPage refetch={refetch} />}
      />
      <Route
        path={ROUTES.SIGN_UP}
        component={() => <SignUpPage refetch={refetch} />}
      />
      <Route exact={ROUTES.LANDING} component={() => <Landing session={session}/>} />

      {/*<Route path="/">*/}
      {/*    <Home/>*/}
      {/*</Route>*/}
    </Switch>
  </Router>
);

export default withSession(App);
