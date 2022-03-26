import React from 'react';
import type { FC, CSSProperties } from 'react';
import cls from 'classnames';

import type { FooterProps, HeaderProps } from '../components';
import { Header, Footer } from '../components';
import '../locales';

import './style.less';

export interface LayoutProps extends FooterProps, HeaderProps {
  /**
   * 显示底部
   */
  showFooter?: boolean;
  style?: CSSProperties;
  className?: string;
}

const Layout: FC<LayoutProps> = ({
  logo,
  logoUrl,
  onWechatLoginClick,
  children,
  showFooter,
  type,
  onRegisterClick,
  style,
  className,
}) => {
  return (
    <div className={cls('avx-user-panel-container', className)} style={style}>
      <Header type={type} logo={logo} logoUrl={logoUrl} />
      {children}
      {(onWechatLoginClick || onRegisterClick) && showFooter ? (
        <Footer
          type={type}
          onWechatLoginClick={onWechatLoginClick}
          onRegisterClick={onRegisterClick}
        />
      ) : null}
    </div>
  );
};

export default Layout;
