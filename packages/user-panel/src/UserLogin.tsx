import React from 'react';
import type { FC } from 'react';
import type { LayoutProps } from './layout';
import type { LoginParamsType } from './type';
import Layout from './layout';
import Login from './login';

export interface UserLoginProps extends Omit<LayoutProps, 'type'> {
  /**
   * 获取校验码方法
   */
  onClickCaptcha?: (mobile: string) => Promise<boolean>;
  /**
   * 登录方法
   */
  onLoginSubmit?: (values: LoginParamsType) => Promise<void>;
}

const UserLogin: FC<UserLoginProps> = ({
  onClickCaptcha,
  onLoginSubmit,
  logo,
  logoUrl,
  wechatLogin,
  showFooter,
}) => {
  return (
    <Layout
      logoUrl={logoUrl}
      logo={logo}
      showFooter={showFooter}
      wechatLogin={wechatLogin}
      type={'login'}
    >
      <Login onClickCaptcha={onClickCaptcha} handleSubmit={onLoginSubmit} />
    </Layout>
  );
};

export default UserLogin;
