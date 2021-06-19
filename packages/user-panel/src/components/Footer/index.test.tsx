import React from 'react';
import { render } from '@testing-library/react';

import Footer from './index';
import IntlWrapper from '../IntlWrapper';

describe('Footer 组件', () => {
  it('登录页脚', () => {
    const { container } = render(
      <IntlWrapper>
        <Footer type={'login'} />
      </IntlWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
  it('微信登陆页面', () => {
    const { container } = render(
      <IntlWrapper>
        <Footer type={'register'} wechatLogin={() => {}} />
      </IntlWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
  it('忘记密码', () => {
    const { container } = render(
      <IntlWrapper>
        <Footer type={'forgot'} />
      </IntlWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
  it('空', () => {
    const { container } = render(
      <IntlWrapper>
        <Footer
          // @ts-ignore
          type={''}
        />
      </IntlWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
});
