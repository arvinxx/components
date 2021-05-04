import React from 'react';
import { render } from '@testing-library/react';

import ErrorFallback from './ErrorFallback';

describe('ErrorFallback', () => {
  it('默认', () => {
    const { container } = render(<ErrorFallback error={'123'} />);
    expect(container).toMatchSnapshot();
  });
});
