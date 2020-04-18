import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { App } from './components';
import { signOut } from './components/sign-out-btn/sign-out-btn';

import './index.css';
import ModalProvider from './helpers/modal-provider';
import {CLIENT} from "./queries/queries";
import SignInPage from "./pages/sign-in";
import {useQuery} from "@apollo/react-hooks";
import {typeDefs} from "./resolvers/typeDefs";

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql',
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    const token = localStorage.getItem('token');

    if (token) {
      headers = { ...headers, 'x-token': token };
    }

    return { headers };
  });

  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log('GraphQL error', message);

      if (message === 'UNAUTHENTICATED') {
        signOut(client);
      }
    });
  }

  if (networkError) {
    console.log('Network error', networkError);

    if (networkError.statusCode === 401) {
      signOut(client);
    }
  }
});

const link = ApolloLink.from([authLink, errorLink, httpLink]);

const cache = new InMemoryCache();

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token')
  },
});

const client = new ApolloClient({
  link,
  cache,
  typeDefs
});

const IsLoggedIn = () => {
  const { data } = useQuery(CLIENT.IS_LOGGED_IN);
  return data.isLoggedIn ? <App /> : <SignInPage />;
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <IsLoggedIn/>
  </ApolloProvider>,
  document.getElementById('root'),
);
