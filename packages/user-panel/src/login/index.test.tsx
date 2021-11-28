import '../../tests/matchMedia.mock';

import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import Login from './index';
import { IntlProvider } from '../components';

describe('Login 组件', () => {
  it('默认状态', () => {
    const { container } = render(
      <IntlProvider>
        <Login />
      </IntlProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('获取验证码', async () => {
    const { container, findByText } = render(
      <IntlProvider>
        <Login />
      </IntlProvider>,
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
