import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { USER } from '../queries/queries';
import { ROUTES } from '../constants/routes.const';
import AuthForm from '../components/auth-form/auth-form';

const SignInPage = ({ history, refetch }) => {
  const INITIAL_STATE = {
    login: '',
    password: '',
  };
  const [state, setState] = useState(INITIAL_STATE);
  const { login, password } = state;
  const [signIn, { error }] = useMutation(USER.SIGN_IN, {
    onCompleted({ signIn }) {
      localStorage.setItem('token', signIn.token);
      history.push(ROUTES.LANDING);
    },
    variables: { login, password },
  });

  const isInvalid = password === '' || login === '';

  const fieldsMap = [
    {
      title: 'Login',
      name: 'login',
      value: login,
      type: 'text',
    },
    {
      title: 'Password',
      name: 'password',
      value: password,
      type: 'password',
    },
  ];

  return (
    <AuthForm
      fieldsMap={fieldsMap}
      type={'Sign In'}
      state={state}
      setState={setState}
      submit={signIn}
      error={error}
      isInvalid={isInvalid}
    />
  );
};

export default SignInPage;
