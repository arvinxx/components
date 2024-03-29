import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';

import WechatLogin from './index';
import '../../locales';

describe('WechatLogin 组件', () => {
  it('默认状态', () => {
    const { container } = render(<WechatLogin />);
    expect(container).toMatchSnapshot();
  });

  it('点击微信登录按钮', async () => {
    const fn = jest.fn();
    const { findByTestId } = render(<WechatLogin login={fn} />);
    const btn = await findByTestId('wechat-btn');
    fireEvent.click(btn);

    expect(fn).toBeCalledTimes(1);
  });
  it('没有实现方法时报错', async () => {
    const { findByTestId } = render(<WechatLogin />);

    const btn = await findByTestId('wechat-btn');

    await act(async () => {
      fireEvent.click(btn);
    });
  });
});
