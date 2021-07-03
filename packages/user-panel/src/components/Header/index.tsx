import React from 'react';
import type { FC } from 'react';
import { Typography } from 'antd';

import { useFormatMessage } from '../Intl';
import type { PanelContentType } from '../../types';

import './style.less';

const { Title } = Typography;

export interface HeaderProps {
  /**
   * 内容类型
   */
  type: PanelContentType;

  /**
   * logo 链接
   */
  logo?: string;
  /**
   * 点击 logo 跳转的 URL
   */
  logoUrl?: string;
}

const Header: FC<HeaderProps> = ({ type, logo, logoUrl }) => {
  const f = useFormatMessage();

  return (
    <div className="avx-user-panel-header">
      {!logo ? null : (
        <div className="avx-user-panel-logo">
          <a href={logoUrl}>
            <img alt={'logo'} src={logo} />
          </a>
        </div>
      )}

      <Title
        level={2}
        style={{
          textAlign: 'center',
          marginBottom: 24,
          fontWeight: 'normal',
        }}
      >
        {f(`${type}.header`)}
      </Title>
    </div>
  );
};

export default Header;
