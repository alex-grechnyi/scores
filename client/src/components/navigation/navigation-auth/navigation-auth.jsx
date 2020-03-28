import React from 'react';
import styles from '../../../newComponents/LoginPage/styleVer2.module.css';
import Notification from "../../notification/Notification";
import {ReactComponent as Plus} from "../../img/svg/plus-box.svg";
import {SignOutBtn} from "../../index";

const NavigationNonAuth = () => (
    <div className={styles.navButtons}>
        {props.state.hasInvites && <Notification
            teamsToJoin={props.state.teamsToAccept}
            accept={acceptTeam}
            refuse={declineTeam}
        />}
        <ModalCreateTeam/>
        {!props.state.isInTeam && <ModalJoinTeam/>}
        <ModalViewTeamPlayer/>
        {!props.state.data.teamName && <div>
            <button onClick={() => {
                setModalCreateTeam(!modalCreateTeam)
            }} className={styles.navBarCreate}>
                                    <span className={styles.btnCreateWrapper}><Plus className={styles.plusImg}/><span
                                        className={styles.btnCreateText}>Create Team</span></span>
            </button>
        </div>}

        <div className={styles.btnUserActionsWrapper}>
            <button onClick={() => {
                setToggleDropDown(!toggleDropDown)
            }} className={styles.userNameBtn}>
                {props.state.data.userName}
            </button>
            {toggleDropDown && <div className={styles.toggleDiv}>
                <ul className={styles.navList}>
                    {!props.state.data.teamName && <li className={styles.navItem} onClick={() => setModalJoinTeam(!modalJoinTeam)}>Join Team</li>}
                    <li className={styles.navItem} onClick={() => setModalViewTeamPlayer(!modalViewTeamPlayer)}>ViewTeam</li>
                </ul>
            </div>}
            <SignOutBtn/>
        </div>
    </div>
);

export default NavigationNonAuth;
