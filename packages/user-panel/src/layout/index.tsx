import React from 'react';
import type { FC } from 'react';
import { IntlWrapper, Header, Footer } from '../components';
import './style.less';
import type { PanelContentType } from '../type';

export interface LayoutProps {
  /**
   * 微信登录方法
   */
  wechatLogin?: () => void;
  /**
   * logo 链接
   */
  logo?: string;
  /**
   * 点击 logo 跳转的 URL
   */
  logoUrl?: string;
  /**
   * 显示底部
   */
  showFooter?: boolean;
  /**
   * 内容类型
   */
  type: PanelContentType;
}

const Layout: FC<LayoutProps> = ({
  logo,
  logoUrl,
  wechatLogin,
  children,
  showFooter,
  type,
}) => {
  return (
    <IntlWrapper>
      <div className="avx-user-panel-container">
        <Header type={type} logo={logo} url={logoUrl} />
        {children}
        {showFooter ? <Footer type={type} wechatLogin={wechatLogin} /> : null}
      </div>
    </IntlWrapper>
  );
};

export default Layout;
