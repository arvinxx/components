import React from 'react';
import { render } from '@testing-library/react';

import LazyImage from '@arvinxu/lazy-image';

describe('LazyImage', () => {
  it('默认状态', () => {
    const { container } = render(<LazyImage />);
    expect(container).toMatchSnapshot();
  });
});
