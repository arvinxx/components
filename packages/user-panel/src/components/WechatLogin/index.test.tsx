import React from 'react';
import { render } from '@testing-library/react';

import WechatLogin from './index';
import IntlWrapper from '../IntlWrapper';

describe('WechatLogin 组件', () => {
  it('默认状态', () => {
    const { container } = render(
      <IntlWrapper>
        <WechatLogin />
      </IntlWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
});
