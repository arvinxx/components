import React from 'react';
import { render } from '@testing-library/react';

import HeatmapCalendar from '@arvinxu/heatmap-calendar';

describe('HeatmapCalendar', () => {
  it('默认状态', () => {
    const { container } = render(<HeatmapCalendar data={[]} />);
    expect(container).toMatchSnapshot();
  });
  it('有数据', () => {
    const { container } = render(
      <HeatmapCalendar
        data={[
          {
            date: '2021-04-03',
            year: 2021,
            day: 3,
            month: 4,
            total: 12,
            week: 3,
          },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
