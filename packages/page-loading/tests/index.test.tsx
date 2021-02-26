import React from 'react';
import { render } from '@testing-library/react';

import PageLoading from '@arvinxu/page-loading';

describe('PageLoading', () => {
  it('默认状态', () => {
    const { container } = render(<PageLoading />);
    expect(container).toMatchSnapshot();
  });
  it('不带加载条', () => {
    const { container } = render(<PageLoading progress={false} />);
    expect(container).toMatchSnapshot();
  });
  it('全屏', () => {
    const { container } = render(<PageLoading fullscreen={true} />);
    expect(container).toMatchSnapshot();
  });
});
