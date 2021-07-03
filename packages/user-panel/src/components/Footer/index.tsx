import React from 'react';
import type { FC } from 'react';
import { Typography, Divider } from 'antd';

import WechatLogin from '../WechatLogin';

import { useFormatMessage } from '../Intl';
import type { PanelContentType } from '../../types';

import './style.less';

const { Text } = Typography;
export interface FooterProps {
  /**
   * 类型
   */
  type: PanelContentType;
  /**
   * 微信登录方法
   */
  wechatLogin?: () => void;

  /**
   * 注册页面 Url
   */
  registerUrl?: string;
}

const Footer: FC<FooterProps> = ({ type, wechatLogin, registerUrl }) => {
  const f = useFormatMessage();

  const getButtonUrl = () => {
    switch (type) {
      case 'login':
        return registerUrl;
      case 'register':
        break;
      case 'forgot':
        break;
      default:
        return '';
    }
  };
  return (
    <div className="avx-user-panel-footer">
      <Divider dashed className="avx-user-panel-footer-divider">
        {f('login.or')}
      </Divider>
      {wechatLogin ? <WechatLogin login={wechatLogin} /> : null}
      <div className="avx-user-panel-footer-other">
        <Text>
          {f(type === 'login' ? 'login.no-account' : 'register.have-account')}
        </Text>
        <div className="avx-user-panel-footer-register">
          <a href={getButtonUrl()}>
            {f(type === 'login' ? 'login.signup' : 'register.sign-in')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
