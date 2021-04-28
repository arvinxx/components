import type { FC } from 'react';
import React from 'react';
import { WechatOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';

import { useFormatMessage } from '../../hooks';

import './style.less';

interface IWechatLoginProps {
  disabled?: boolean;
  onClick?: () => void;
}
const WechatLogin: FC<IWechatLoginProps> = ({ onClick }) => {
  const f = useFormatMessage();
  const handleWeChatClick = () => {
    if (onClick) {
      onClick();
    } else {
      const errorMsg = f('login.wechat-login.function.error');

      message.error(errorMsg);
      throw Error(errorMsg);
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
