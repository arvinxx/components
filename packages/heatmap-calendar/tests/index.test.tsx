import React from 'react';
import { render } from '@testing-library/react';

import HeatmapCalendar from '@arvinxu/heatmap-calendar';

describe('HeatmapCalendar', () => {
  it('默认状态', () => {
    const { container } = render(<HeatmapCalendar data={[]} />);
    expect(container).toMatchSnapshot();
  });
});
