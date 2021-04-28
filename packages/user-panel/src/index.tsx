import React from 'react';
import type { FC } from 'react';
import { IntlWrapper } from './components';
import Login from './login';

import type { LoginParamsType } from './type';

export interface UserPanelProps {
  /**
   * 获取校验码方法
   */
  onClickCaptcha: (mobile: string) => Promise<boolean>;
  /**
   * 登录方法
   */
  onLoginSubmit: (values: LoginParamsType) => Promise<void>;
}

const UserPanel: FC<UserPanelProps> = ({ onClickCaptcha, onLoginSubmit }) => {
  return (
    <IntlWrapper>
      <Login onClickCaptcha={onClickCaptcha} handleSubmit={onLoginSubmit} />
    </IntlWrapper>
  );
};

export default UserPanel;
