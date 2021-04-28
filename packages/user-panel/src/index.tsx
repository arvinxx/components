import React from 'react';

import { IntlWrapper, Header } from './components';
import Login from './login';
import './style.less';

import type { FC } from 'react';
import type { LoginParamsType } from './type';

export interface UserPanelProps {
  /**
   * 获取校验码方法
   */
  onClickCaptcha?: (mobile: string) => Promise<boolean>;
  /**
   * 登录方法
   */
  onLoginSubmit?: (values: LoginParamsType) => Promise<void>;

  /**
   * logo 链接
   */
  logo?: string;
  /**
   * 点击 logo 跳转的 URL
   */
  logoUrl?: string;
}

const UserPanel: FC<UserPanelProps> = ({
  onClickCaptcha,
  onLoginSubmit,
  logo,
  logoUrl,
}) => {
  return (
    <IntlWrapper>
      <div className="avx-user-panel-container">
        <Header type={'login'} logo={logo} url={logoUrl} />
        <Login onClickCaptcha={onClickCaptcha} handleSubmit={onLoginSubmit} />
      </div>
    </IntlWrapper>
  );
};

export default UserPanel;
