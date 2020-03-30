import React from 'react';
import { NavLink } from 'react-router-dom';

import {SignOutBtn} from "../index";
import NavigationNonAuth from "./navigation-not-auth/navigation-not-auth";

import {ROUTES} from "../../constants/routes.const";
import styles from "../../styleVer2.module.css";
import {Col, Container, Row} from "react-bootstrap";


const Navigation = ({ session }) => (
    <div className={styles.header}>
        <Container>
            <div className={styles.headerBox}>
                <NavLink className={styles.labelLink} to='/'>
                    <div className={styles.godel}>Godel<span
                        className={styles.football}>Football</span></div>
                </NavLink>
                {session && session.me ? (
                    <NavigationAuth session={session} />
                ) : (
                    <NavigationNonAuth />
                )}
            </div>
        </Container>
    </div>
);

const NavigationAuth = ({ session }) => (
    <ul>
        <li>
            <NavLink to={ROUTES.LANDING}>Landing</NavLink>
        </li>
        <li>
            <NavLink to={routes.ACCOUNT}>Account ({session.me.username})</NavLink>
        </li>
        {session &&
        session.me &&
        session.me.isCaptain && (
            <li>
                captain page
            </li>
        )}
        <li>
            <SignOutBtn />
        </li>
    </ul>
);

export default Navigation;