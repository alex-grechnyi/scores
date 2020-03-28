import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import history from '../../constants/history';
import {ROUTES} from "../../constants/routes.const";

const SignOutButton = () => (
    <ApolloConsumer>
        {client => (
            <button type="btn btn-outline-secondary block logout" onClick={() => signOut(client)}>
                Sign Out
            </button>
        )}
    </ApolloConsumer>
);

export const signOut = client => {
    localStorage.removeItem('token');
    client.resetStore();
    history.push(ROUTES.SIGN_IN);
};

export default SignOutButton;