import React from 'react';
import type { FC } from 'react';
import { Typography, Divider } from 'antd';

import WechatLogin from '../WechatLogin';

import { useFormatMessage } from '../../hooks';
import type { PanelContentType } from '../../type';

import './style.less';

const { Text } = Typography;
interface FooterProps {
  /**
   * 类型
   */
  type: PanelContentType;
  /**
   * 微信登录方法
   */
  wechatLogin?;
}

const Footer: FC<FooterProps> = ({ type, wechatLogin }) => {
  const f = useFormatMessage();

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
          <a href={`/user/${type === 'login' ? 'register' : 'login'}`}>
            {f(type === 'login' ? 'login.signup' : 'register.sign-in')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
