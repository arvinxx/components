import React from 'react';
import { render } from '@testing-library/react';

import LoginMessage from './LoginMessage';

describe('LoginMessage', () => {
  it('默认状态', () => {
    const { container } = render(<LoginMessage content={'test'} />);
    expect(container).toMatchSnapshot();
  });
});
