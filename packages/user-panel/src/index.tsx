import React from 'react';

import { IntlWrapper, Header, Footer } from './components';
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
  const type = 'login';
  return (
    <IntlWrapper>
      <div className="avx-user-panel-container">
        <Header type={type} logo={logo} url={logoUrl} />
        <Login onClickCaptcha={onClickCaptcha} handleSubmit={onLoginSubmit} />
        <Footer type={type} />
      </div>
    </IntlWrapper>
  );
};

export default UserPanel;
