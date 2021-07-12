import React from 'react';
import { render } from '@testing-library/react';

import DecisionGuide from '@arvinxu/decision-guide';

describe('DecisionGuide', () => {
  it('默认状态', () => {
    const { container } = render(<DecisionGuide />);
    expect(container).toMatchSnapshot();
  });
});
