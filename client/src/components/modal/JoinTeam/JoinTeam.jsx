import React from 'react';
import JoinItem from './JoinItem/JoinItem';
import Modal from '../modal';
import { TITLE } from '../../../constants/modals.const';

const JoinTeam = props => {
  const { teamsToJoin, joinTeam } = props;

  return (
    <Modal title={TITLE.TEAMS_TO_JOIN}>
      {teamsToJoin
        ? teamsToJoin.map(game => (
            <JoinItem {...game} joinTeam={joinTeam} />
          ))
        : null}
    </Modal>
  );
};

export default JoinTeam;
