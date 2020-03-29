import { Route, Router, Switch } from 'react-router';
import history from '../../constants/history';
// import ApproveGames from "../modal/ApproveGames/ApproveGames";
// import GameCreate from "../modal/GameCreate/GameCreate";
// import Notification from "../notification/Notification";
import Login from '../loginPage';
// import Register from "../registerPage";
// import CreateTeam from "../modal/CreateTeam/createTeam";
// import ViewTeam from "../modal/ViewTeam/ViewTeam";
// import InvitePlayer from "./components/modal/InvitePlayer/ChoosePlayer";
// import Home from "../homePage";
import React from 'react';
import ViewTeamPlayer from '../modal/ViewTeam/ViewTeamPlayer';
import SignUpPage from '../sign-up';
import withSession from '../session/session';
import {ROUTES} from "../../constants/routes.const";

const App = ({ session, refetch }) => (
  <Router history={history}>
    <Switch>
      <Route path="/login">
        <ViewTeamPlayer />
      </Route>
      <Route path={ROUTES.SIGN_UP} component={() => <SignUpPage refetch={refetch}/>} />
      {/*<Route path="/">*/}
      {/*    <Home/>*/}
      {/*</Route>*/}
    </Switch>
  </Router>
);

export default withSession(App);
