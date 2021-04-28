import React from 'react';
import type { FC } from 'react';
import { Typography } from 'antd';

import { useFormatMessage } from '../../hooks';
import type { LocaleKey } from '../../type';

import './style.less';

const { Title } = Typography;

export interface HeaderProps {
  type: 'login' | 'register' | 'forgot';
  logo?: string;
  url?: string;
}

const Header: FC<HeaderProps> = ({ type, logo, url }) => {
  const f = useFormatMessage();

  return (
    <div className="avx-user-panel-header">
      {!logo ? null : (
        <div className="avx-user-panel-logo">
          <a href={url}>
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
        {f(`${type}.header` as LocaleKey)}
      </Title>
    </div>
  );
};

export default Header;
