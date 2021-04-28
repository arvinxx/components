import React from 'react';
import type { FC } from 'react';
import { Typography, Divider } from 'antd';

import WechatLogin from '../WechatLogin';

import { useFormatMessage } from '../../hooks';

import './style.less';

const { Text } = Typography;
interface FooterProps {
  type: 'login' | 'register' | 'forgot';
}

const Footer: FC<FooterProps> = ({ type }) => {
  const f = useFormatMessage();

  return (
    <div className="avx-user-panel-footer">
      <Divider dashed className="avx-user-panel-footer-divider">
        {f('login.or')}
      </Divider>
      <WechatLogin />
      <div className="avx-user-panel-footer-other">
        <Text>
          {f(type === 'login' ? 'login.no-account' : 'register.have-account')}
        </Text>
        <div className="avx-user-panel-footer-register">
          <a href={`/user/${type === 'login' ? 'register' : 'login'}`}>
            {f(type === 'login' ? 'login.signup' : 'register.sign-in')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
