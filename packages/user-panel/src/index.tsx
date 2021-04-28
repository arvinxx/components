import React from 'react';

import { IntlWrapper, Header } from './components';
import Login from './login';
import './style.less';

import type { FC } from 'react';
import type { HeaderProps } from './components';
import type { LoginParamsType } from './type';

export interface UserPanelProps extends HeaderProps {
  /**
   * 获取校验码方法
   */
  onClickCaptcha: (mobile: string) => Promise<boolean>;
  /**
   * 登录方法
   */
  onLoginSubmit: (values: LoginParamsType) => Promise<void>;
}

const UserPanel: FC<UserPanelProps> = ({
  onClickCaptcha,
  onLoginSubmit,
  logo,
}) => {
  return (
    <IntlWrapper>
      <div className="avx-user-panel-container">
        <Header type={'login'} logo={logo} />
        <Login onClickCaptcha={onClickCaptcha} handleSubmit={onLoginSubmit} />
      </div>
    </IntlWrapper>
  );
};

export default UserPanel;
