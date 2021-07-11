/**
 * compact: true
 */
import React from 'react';

import UserPanel from '@arvinxu/user-panel';
import { message } from 'antd';

const LoginWithFooter = () => {
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
        showFooter
        wechatLogin={() => {
          message.info('微信登录实现方法');
        }}
        registerUrl="/components/biz/user-panel#显示底部"
      />
    </div>
  );
};

export default LoginWithFooter;
