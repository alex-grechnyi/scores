import React from 'react';

import { graphql } from '@apollo/react-hoc';
import { Modal } from 'react-bootstrap';

import styles from '../CreateTeam/test.module.css';
import { useModal } from '../../../helpers/modal.util';
import {USER} from "../../../queries/queries";
import LoadingMin from "../../loading-min/loading-min";

const ViewTeamPlayer = ({data}) => {
  // const {teamName, approvedPlayer, leaveTeam, myCaptain} = props;

    const {me, loading, error} = data;
    if(loading) return <LoadingMin/>

    return (
    <>
      <Modal.Header closeButton>
        <h1 className={styles.teamName}>{me.teamName}</h1>
      </Modal.Header>
      <Modal.Body>
        {/*<div className={styles.modalBody}>*/}
        {/*    Captain: {myCaptain}*/}
        {/*    {approvedPlayer}*/}
        {/*    {leaveTeam}*/}
        {/*</div>*/}
      </Modal.Body>
    </>
  );
};

export default graphql(USER.GET_ME)(ViewTeamPlayer);
