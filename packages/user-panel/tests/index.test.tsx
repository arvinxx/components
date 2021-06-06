import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import UserPanel from '@arvinxu/user-panel';

describe('UserPanel', () => {
  it('登录面板', async () => {
    const { container, findByText } = render(
      <UserPanel.Login
        onClickCaptcha={(mobile) => {
          console.log(mobile);
          return new Promise((resolve) => {
            resolve(true);
          });
        }}
        onLoginSubmit={() => {
          return new Promise((resolve) => {
            resolve();
          });
        }}
      />,
    );
    const btn = await findByText('手机号登录');

    await act(async () => {
      fireEvent.click(btn);
      const captcha = await findByText('获取验证码');
      await fireEvent.click(captcha);
    });

    expect(container).toMatchSnapshot();
  });
});
