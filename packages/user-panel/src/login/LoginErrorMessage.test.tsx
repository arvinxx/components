import React from 'react';
import { render } from '@testing-library/react';

import LoginErrorMessage from './LoginErrorMessage';

describe('LoginMessage', () => {
  it('默认状态', () => {
    const { container } = render(<LoginErrorMessage content={'test'} />);
    expect(container).toMatchSnapshot();
  });
});
