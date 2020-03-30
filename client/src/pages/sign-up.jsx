import React, { useState } from 'react';
import AuthForm from '../components/auth-form/auth-form';
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

  const isInvalid =
    password !== passwordConfirmation ||
    password === '' ||
    login === '' ||
    userName === '';

  const fieldsMap = [
    {
      title: 'Login',
      name: 'login',
      value: login,
      type: 'text',
    },
    {
      title: 'Full Name',
      name: 'userName',
      value: userName,
      type: 'text',
    },
    {
      title: 'Password',
      name: 'password',
      value: password,
      type: 'password',
    },
    {
      title: 'Confirm password',
      name: 'passwordConfirmation',
      value: passwordConfirmation,
      type: 'password',
    },
  ];

  return (
    <>
      <AuthForm
        fieldsMap={fieldsMap}
        type={'Sign Up'}
        state={state}
        setState={setState}
        submit={signUp}
        error={error}
        isInvalid={isInvalid}
      />
    </>
  );
};

export default withRouter(SignUpPage);
