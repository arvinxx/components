import React from 'react';
import { render } from '@testing-library/react';

import { Header } from './index';
import '../../locales';

describe('Header 组件', () => {
  it('登录头部', () => {
    const { container } = render(<Header type={'login'} />);
    expect(container).toMatchSnapshot();
  });
});
