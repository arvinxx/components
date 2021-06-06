import React from 'react';
import { render } from '@testing-library/react';

import { InPort } from './InPort';

describe('InPort', () => {
  it('默认', () => {
    const { container } = render(<InPort color={'red'} />);
    expect(container).toMatchSnapshot();
  });
});
