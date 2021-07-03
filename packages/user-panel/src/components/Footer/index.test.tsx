import React from 'react';
import { render } from '@testing-library/react';

import Footer from './index';
import { IntlProvider } from '../Intl';

describe('Footer 组件', () => {
  it('登录页脚', () => {
    const { container } = render(
      <IntlProvider>
        <Footer type={'login'} />
      </IntlProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('微信登陆页面', () => {
    const { container } = render(
      <IntlProvider>
        <Footer type={'register'} wechatLogin={() => {}} />
      </IntlProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('忘记密码', () => {
    const { container } = render(
      <IntlProvider>
        <Footer type={'forgot'} />
      </IntlProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('空', () => {
    const { container } = render(
      <IntlProvider>
        <Footer
          // @ts-ignore
          type={''}
        />
      </IntlProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
