import React from 'react';
import type { FC } from 'react';
import type { NavigateFunction } from 'react-router';
import { useNavigate } from 'react-router';

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
   * @title 微信登录方法
   */
  onWechatLoginClick?: () => void;

  /**
   * @title 注册页面 Url
   */
  onRegisterClick?: (navigate: NavigateFunction) => void;
}

export const Footer: FC<FooterProps> = ({
  type,
  onWechatLoginClick,
  onRegisterClick,
}) => {
  const f = useFormatMessage();

  const navigate = useNavigate();

  const onClick = () => {
    switch (type) {
      case 'login':
        onRegisterClick?.(navigate);
        break;
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
      {onWechatLoginClick ? <WechatLogin login={onWechatLoginClick} /> : null}
      <div className="avx-user-panel-footer-other">
        <Text>
          {f(type === 'login' ? 'login.no-account' : 'register.have-account')}
        </Text>
        <div className="avx-user-panel-footer-register">
          <a onClick={() => onClick()}>
            {f(type === 'login' ? 'login.signup' : 'register.sign-in')}
          </a>
        </div>
      </div>
    </div>
  );
};
