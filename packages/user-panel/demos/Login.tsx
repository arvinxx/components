/**
 * compact: true
 */
import React from 'react';

import UserPanel from '@arvinxu/user-panel';

const Login = () => {
  return (
    <div
      style={{
        background: '#e8e8e8',
        display: 'flex',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <UserPanel.Login />
    </div>
  );
};

export default Login;
