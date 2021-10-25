import React from 'react';
import { render } from '@testing-library/react';

import Mindverse from '@arvinxu/mindverse';

describe('Mindverse', () => {
  it('默认状态', () => {
    const { container } = render(<Mindverse />);
    expect(container).toMatchSnapshot();
  });
});
