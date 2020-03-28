import Header from "../header/Header";
import {Route, Router, Switch} from "react-router";
import history from "../../history";
import ApproveGames from "../modal/ApproveGames/ApproveGames";
import GameCreate from "../modal/GameCreate/GameCreate";
import Notification from "../notification/Notification";
import Login from "../loginPage";
import Register from "../registerPage";
import CreateTeam from "../modal/CreateTeam/createTeam";
import ViewTeam from "../modal/ViewTeam/ViewTeam";
import InvitePlayer from "./components/modal/InvitePlayer/ChoosePlayer";
import Home from "../homePage";
import React from "react";


class App extends React.Component {
    state = {};

    render() {
        return <>
            <Header/>
            <Router history={history}>
                <Switch>
                    <Route path="/modal">
                        <div>
                            <ApproveGames/>
                            <GameCreate/>
                            <Notification/>
                        </div>

                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/test1">
                        <CreateTeam/>
                        <ViewTeam/>
                        <InvitePlayer/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router></>
    }
}

export default App;