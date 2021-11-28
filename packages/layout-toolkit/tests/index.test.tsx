import React from 'react';
import { render } from '@testing-library/react';

import LayoutToolkit from '@arvinxu/layout-toolkit';

describe('LayoutToolkit', () => {
  it('默认状态', () => {
    const { container } = render(<LayoutToolkit />);
    expect(container).toMatchSnapshot();
  });
});
