import React, {useEffect, useState} from 'react';

import { ApolloConsumer } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';

import { ModalContext } from './modal.util';
import * as queries from '../queries/queries';

const ModalProvider = ({ children }) => {
   /* const queryMultiple = () => {
        const res1 = useQuery(queries.TEAM.GET_TEAMS);
        const res2 = useQuery(queries.GAME.GET_GAMES);
        return [res1, res2];
    }

    const [
        { data: teams },
        { data: games }
    ] = queryMultiple()*/


  return (
        <ModalContext.Provider value={'team'}>
          {children}
        </ModalContext.Provider>
  );
};

export default ModalProvider;
