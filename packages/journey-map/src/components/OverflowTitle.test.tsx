import React from 'react';
import { render } from '@testing-library/react';

import OverflowTitle from './OverflowTitle';

describe('OverflowTitle', () => {
  it('x 轴', () => {
    const { container } = render(<OverflowTitle direction="x" title="hello" />);
    expect(container).toMatchSnapshot();
  });
  it('x 轴 overflow', () => {
    const { container } = render(
      <div style={{ width: 1 }}>
        <OverflowTitle direction="x" title="hello" />
      </div>,
    );
    expect(container).toMatchSnapshot();
  });

  it('y 轴', () => {
    const { container } = render(<OverflowTitle direction="y" title="hello" />);
    expect(container).toMatchSnapshot();
  });
});
