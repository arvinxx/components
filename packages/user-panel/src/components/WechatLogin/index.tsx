import type { FC } from 'react';
import React from 'react';
import { WechatOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';

import { useFormatMessage } from '../Intl';

import './style.less';

interface IWechatLoginProps {
  disabled?: boolean;
  login?: () => void;
}
const WechatLogin: FC<IWechatLoginProps> = ({ login }) => {
  const f = useFormatMessage();
  const handleWeChatClick = () => {
    if (login) {
      login();
    } else {
      const errorMsg = f('login.wechat-login.function.error');

      message.error(errorMsg);
    }
  };

  return (
    <Button
      size="large"
      onClick={handleWeChatClick}
      className="avx-user-panel-wechat"
      type="default"
      data-testid={'wechat-btn'}
    >
      <WechatOutlined className="avx-user-panel-wechat-icon" />
      {f('login.wechat-login.btn')}
    </Button>
  );
};

export default WechatLogin;
