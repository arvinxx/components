import React from 'react';
import { render } from '@testing-library/react';

import { Header } from './index';
import { IntlProvider } from '../Intl';

describe('Header 组件', () => {
  it('登录头部', () => {
    const { container } = render(
      <IntlProvider>
        <Header type={'login'} />
      </IntlProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
