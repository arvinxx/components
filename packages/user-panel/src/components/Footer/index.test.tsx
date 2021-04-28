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
});
