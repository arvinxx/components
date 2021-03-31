import type { FC } from 'react';
import React from 'react';
import { Chart, LineAdvance } from 'bizcharts';

import Stage from './Stage';

import { JournalMapStore } from '../useJournalMap';

interface LineChartProps {
  /**
   * 符合 chart结构的数据
   */
}
const LineChart: FC<LineChartProps> = () => {
  const { actions } = JournalMapStore.useContainer();

  const data = Object.values(actions)
    .flat()
    .map((item) => ({
      x: item.title,
      y: item.emotion,
    }));

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 40 }}>
        <Stage height={300}>体验情绪</Stage>
      </div>
      <div style={{ marginTop: 2, width: '100%' }}>
        <Chart autoFit height={300} data={data || []}>
          <LineAdvance
            // label={{}}
            shape="smooth"
            point
            area
            position="x*y"
          />
        </Chart>
      </div>
    </div>
  );
};

export default LineChart;
