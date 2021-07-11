/**
 * compact: true
 */
import React from 'react';

import UserPanel from '@arvinxu/user-panel';

const LoginWithLogo = () => {
  return (
    <div
      style={{
        background: '#e8e8e8',
        display: 'flex',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <UserPanel.Login
        logo={
          'https://gw.alipayobjects.com/zos/antfincdn/LFmaI3%26OJh/logo.svg'
        }
      />
    </div>
  );
};

export default LoginWithLogo;
