import React from 'react';
import { render } from '@testing-library/react';

import ColorPicker from '@arvinxu/color-picker';

describe('ColorPicker', () => {
  it('默认状态', () => {
    const { container } = render(<ColorPicker />);
    expect(container).toMatchSnapshot();
  });
});
