import React from 'react';
import type { FC } from 'react';
import type { LayoutProps } from './layout';
import type { LoginProps } from './login';

import Layout from './layout';
import Login from './login';
import type { IUserLogin } from './types';

export interface UserLoginProps
  extends Omit<LayoutProps, 'type'>,
    Pick<LoginProps, 'onCaptchaClick' | 'onForgotClick'> {
  /**
   * 登录方法
   */
  onLoginSubmit?: IUserLogin.LoginSubmit;
}

export const UserLogin: FC<UserLoginProps> = ({
  onCaptchaClick,
  onLoginSubmit,
  logo,
  logoUrl,
  onWechatLoginClick,
  showFooter,
  onForgotClick,
  onRegisterClick,
  style,
  className,
}) => {
  return (
    <Layout
      logoUrl={logoUrl}
      logo={logo}
      showFooter={showFooter}
      onRegisterClick={onRegisterClick}
      onWechatLoginClick={onWechatLoginClick}
      type={'login'}
      style={style}
      className={className}
    >
      <Login
        onCaptchaClick={onCaptchaClick}
        onSubmit={onLoginSubmit}
        onForgotClick={onForgotClick}
      />
    </Layout>
  );
};
