import React from 'react';
import { render } from '@testing-library/react';

import TrafficLight from '@arvinxu/macos-traffic-light';

describe('TrafficLight', () => {
  it('默认状态', () => {
    const { container } = render(<TrafficLight />);
    expect(container).toMatchSnapshot();
  });
});
