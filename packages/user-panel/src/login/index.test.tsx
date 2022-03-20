import '../../tests/matchMedia.mock';

import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import Login from './index';
import '../locales';
import i18n from '../locales';

i18n.changeLanguage('zh-CN');

describe('Login 组件', () => {
  it('默认状态', () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });

  it('获取验证码', async () => {
    const {
      // container,
      findByText,
    } = render(<Login />);
    const btn = await findByText('手机号登录');

    await act(async () => {
      fireEvent.click(btn);
      const captcha = await findByText('获取验证码');
      fireEvent.click(captcha);
    });
  });
});
