import React from 'react';
import { render } from '@testing-library/react';

import { Square } from '@arvinxu/preloader';

describe('Preloader', () => {
  it('Square', () => {
    const { container } = render(<Square />);
    expect(container).toMatchSnapshot();
  });
});
