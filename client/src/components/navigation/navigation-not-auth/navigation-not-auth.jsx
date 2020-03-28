import React from 'react';
import { ROUTES } from '../../../constants/routes.const';
import styles from '../../../newComponents/LoginPage/styleVer2.module.css';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationNonAuth = () => (
  <Col className={styles.navButtons}>
    <NavLink to={ROUTES.SIGN_UP}>
      <button type="button" className={styles.navBarRegister}>
        Register
      </button>
    </NavLink>
    <NavLink to={ROUTES.SIGN_UP}>
      <button type="button" className={styles.navBarLogin}>
        Login
      </button>
    </NavLink>
  </Col>
);

export default NavigationNonAuth;
