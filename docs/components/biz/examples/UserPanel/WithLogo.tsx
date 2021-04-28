/**
 * compact: true
 */
import React from 'react';

import UserPanel from '@arvinxu/user-panel';

const WithLogo = () => {
  return (
    <div
      style={{
        background: '#e8e8e8',
        display: 'flex',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <UserPanel
        logo={
          'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg'
        }
      />
    </div>
  );
};

export default WithLogo;
