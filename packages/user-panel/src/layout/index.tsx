import React, { CSSProperties } from 'react';
import type { FC } from 'react';
import type { FooterProps, HeaderProps } from '../components';
import { IntlProvider, Header, Footer } from '../components';
import './style.less';

export interface LayoutProps extends FooterProps, HeaderProps {
  /**
   * 显示底部
   */
  showFooter?: boolean;
  style?: CSSProperties;
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
}) => {
  return (
    <IntlProvider>
      <div className="avx-user-panel-container" style={style}>
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
    </IntlProvider>
  );
};

export default Layout;
