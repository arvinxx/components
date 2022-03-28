/**
 * compact: true
 */
import React, { useEffect, useState } from 'react';

import { Flexbox } from '@arvinxu/layout-kit';
import UserPanel from '@arvinxu/user-panel';
import { Switch } from 'antd';
import { getI18n } from 'react-i18next';

const LoginWithLogo = () => {
  const [locale, setLocale] = useState('zh-CN');

  useEffect(() => {
    getI18n().changeLanguage(locale);
  }, [locale]);

  return (
    <div
      style={{
        background: '#e8e8e8',
        display: 'flex',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <Flexbox gap={8} align={'center'}>
        <Flexbox horizontal>
          <Switch
            checked={locale === 'en-US'}
            unCheckedChildren={'中文'}
            checkedChildren={'英文'}
            onChange={(checked) => {
              setLocale(checked ? 'en-US' : 'zh-CN');
            }}
          />
        </Flexbox>
        <UserPanel.Login
          logo={'https://gw.alipayobjects.com/zos/antfincdn/LFmaI3%26OJh/logo.svg'}
          showFooter
          onWechatLoginClick={() => {}}
          onCaptchaClick={async () => {
            return true;
          }}
        />
      </Flexbox>
    </div>
  );
};

export default LoginWithLogo;
