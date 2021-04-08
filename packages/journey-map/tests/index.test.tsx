import React from 'react';
import { render } from '@testing-library/react';

import JourneyMap from '@arvinxu/journey-map';

describe('JourneyMap', () => {
  it('默认状态', () => {
    const { container } = render(
      <JourneyMap data={{ actions: {}, steps: [] }} />,
    );
    expect(container).toMatchSnapshot();
  });
});
