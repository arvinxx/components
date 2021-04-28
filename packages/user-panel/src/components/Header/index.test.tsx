import React from 'react';
import { render } from '@testing-library/react';

import Header from './index';
import IntlWrapper from '../IntlWrapper';

describe('Header 组件', () => {
  it('登录头部', () => {
    const { container } = render(
      <IntlWrapper>
        <Header type={'login'} />
      </IntlWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
});
