import React from 'react';
import { render } from '@testing-library/react';

import { Footer } from './index';
import '../../locales';

describe('Footer 组件', () => {
  it('登录页脚', () => {
    const { container } = render(<Footer type={'login'} />);
    expect(container).toMatchSnapshot();
  });
  it('微信登陆页面', () => {
    const { container } = render(<Footer type={'register'} onWechatLoginClick={() => {}} />);
    expect(container).toMatchSnapshot();
  });
  it('忘记密码', () => {
    const { container } = render(<Footer type={'forgot'} />);
    expect(container).toMatchSnapshot();
  });
  it('空', () => {
    const { container } = render(
      // @ts-ignore
      <Footer type={''} />,
    );
    expect(container).toMatchSnapshot();
  });
});
