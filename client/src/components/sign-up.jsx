import React, { useState } from 'react';
import RegisterPageVer2 from '../newComponents/RegisterPage/RegisterPageVer2';
import { Redirect } from 'react-router';
import Header from './header/Header';
import { useMutation } from '@apollo/react-hooks';
import { USER } from '../queries/queries';
import { ROUTES } from '../constants/routes.const';
import { withRouter } from 'react-router-dom';

const SignUpPage = ({ history, refetch }) => {
  const INITIAL_STATE = {
    userName: '',
    login: '',
    password: '',
    passwordConfirmation: '',
  };
  const [state, setState] = useState(INITIAL_STATE);
  const { userName, login, password, passwordConfirmation } = state;
  const [signUp, { error }] = useMutation(USER.SIGN_UP, {
    onCompleted({ signUp }) {
      localStorage.setItem('token', signUp.token);
      history.push(ROUTES.SIGN_UP);
    },
    variables: { userName, login, password },
  });

  const onChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();

    signUp();
  };

  const isInvalid =
    password !== passwordConfirmation ||
    password === '' ||
    login === '' ||
    userName === '';

  return (
    <>
      <RegisterPageVer2
        login={login}
        password={password}
        userName={userName}
        confirmPassword={passwordConfirmation}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
        isInvalid={isInvalid}
      />
    </>
  );
};

export default withRouter(SignUpPage);
