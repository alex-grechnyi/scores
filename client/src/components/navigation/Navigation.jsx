import React from 'react';
import { NavLink } from 'react-router-dom';

import SignOutButton from "./";
import NavigationNonAuth from "./navigation-not-auth/navigation-not-auth";

import {ROUTES} from "../../constants/routes.const";
import styles from "../../newComponents/LoginPage/styleVer2.module.css";
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
            <Link to={routes.ACCOUNT}>Account ({session.me.username})</Link>
        </li>
        {session &&
        session.me &&
        session.me.role === 'ADMIN' && (
            <li>
                <Link to={routes.ADMIN}>Admin</Link>
            </li>
        )}
        <li>
            <SignOutButton />
        </li>
    </ul>
);

export default Navigation;