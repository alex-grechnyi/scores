import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import history from '../../constants/history';
import {ROUTES} from "../../constants/routes.const";
import styles from "../../styleVer2.module.css";
import {SignOutIcon} from "../../icons";

const SignOutButton = () => (
    <ApolloConsumer>
        {client => (
            <button className={styles.btnLogout} onClick={() => signOut(client)}><SignOutIcon
            className={styles.btnLogoutIcon}/></button>
        )}
    </ApolloConsumer>
);

export const signOut = client => {
    localStorage.removeItem('token');
    client.resetStore();
    history.push(ROUTES.SIGN_IN);
};

export default SignOutButton;