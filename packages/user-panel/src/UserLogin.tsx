import React from 'react';
import type { FC } from 'react';
import type { LayoutProps } from './layout';
import type { LoginProps } from './login';

import Layout from './layout';
import Login from './login';
import type { IUserLogin } from './types';

export interface UserLoginProps
  extends Omit<LayoutProps, 'type'>,
    Pick<LoginProps, 'onClickCaptcha' | 'forgotUrl'> {
  /**
   * 登录方法
   */
  onLoginSubmit?: IUserLogin.LoginSubmit;
}

const UserLogin: FC<UserLoginProps> = ({
  onClickCaptcha,
  onLoginSubmit,
  logo,
  logoUrl,
  wechatLogin,
  showFooter,
  forgotUrl,
  registerUrl,
}) => {
  return (
    <Layout
      logoUrl={logoUrl}
      logo={logo}
      showFooter={showFooter}
      registerUrl={registerUrl}
      wechatLogin={wechatLogin}
      type={'login'}
    >
      <Login
        onClickCaptcha={onClickCaptcha}
        handleSubmit={onLoginSubmit}
        forgotUrl={forgotUrl}
      />
    </Layout>
  );
};

export default UserLogin;
