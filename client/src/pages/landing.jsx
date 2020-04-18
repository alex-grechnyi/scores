import React from 'react';

import Header from '../components/header/Header';

const Landing = ({ session }) => {
  return session ? (
    <Header me={session.me} />
  ) : (
    <div>loading....</div>
  );
};

export default Landing;
