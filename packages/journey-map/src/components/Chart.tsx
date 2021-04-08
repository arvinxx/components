import type { FC } from 'react';
import React, { useContext } from 'react';
import type { AreaConfig } from '@ant-design/charts/es/area';
import { Area } from '@ant-design/charts';
import { blue } from '@ant-design/colors';

import Stage from './Stage';
import { JourneyMapStore } from '../useJourneyMap';
import './Chart.less';

interface ChartProps {
  color?: string;
}

/**
 * 更
 * @param text
 */
const getFormattedEmotion = (text: string | number) => {
  switch (text.toString()) {
    case '-2':
      return '极差';
    case '-1':
      return '差';
    case '0':
      return '一般';
    case '1':
      return '好';
    case '2':
      return '极好';
    default:
      return text;
  }
};

const Chart: FC<ChartProps> = ({ color = blue[2] }) => {
  const [store] = useContext(JourneyMapStore);
  const { actions } = store;
  const data = Object.values(actions).flat();

  const config: AreaConfig = {
    data,
    // padding: [24, 40],
    tooltip: {
      formatter: (datum) => {
        const { emotion } = datum;

        return { name: '情绪值', value: getFormattedEmotion(emotion) };
      },
    },
    xField: 'title',
    yField: 'emotion',
    yAxis: {
      alias: '情绪值',
      label: {
        formatter: getFormattedEmotion,
      },
      grid: {
        line: null,
      },
    },
    xAxis: {
      label: null,
      line: null,
    },

    annotations: [
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: blue[2],
          lineDash: [6, 4],
        },
      },
    ],
    autoFit: true,
    smooth: true,
    areaStyle: () => ({ fill: `l(270) 0:${blue[0]} 1:${blue[4]}` }),

    line: {
      color,
    },

    height: 300,
    animation: { appear: { animation: 'fade-in' } },
  };
  return (
    <div className="avx-journey-map-chart">
      <div style={{ width: 40 }}>
        <Stage height={300}>体验情绪</Stage>
      </div>
      <div style={{ marginTop: 2, width: '100%' }}>
        <Area {...config} />
      </div>
    </div>
  );
};

export default Chart;
