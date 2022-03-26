import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import UserPanel from '@arvinxu/user-panel';
import i18n from '../src/locales';

i18n.changeLanguage('zh-CN');

describe('UserPanel', () => {
  it('登录面板', async () => {
    const {
      // container,
      findByText,
    } = render(
      <UserPanel.Login
        onCaptchaClick={(mobile) => {
          console.log(mobile);
          return new Promise((resolve) => {
            resolve(true);
          });
        }}
        onLoginSubmit={() => {
          return new Promise((resolve) => {
            resolve({
              type: 'account',
              status: 'ok',
              currentAuthority: 'user',
            });
          });
        }}
      />,
    );
    const btn = await findByText('手机号登录');

    await act(async () => {
      fireEvent.click(btn);
      const captcha = await findByText('获取验证码');
      fireEvent.click(captcha);
    });

    // setTimeout(() => {
    //   expect(container).toMatchSnapshot();
    // }, 1000);
  });
});
