import type { FC } from 'react';
import React, { useContext } from 'react';
import type { AreaConfig } from '@ant-design/charts/es/area';
import { Area } from '@ant-design/charts';
import { blue } from '@ant-design/colors';

import { Section } from '../components';
import { JourneyMapStore } from '../useJourneyMap';
import './style.less';

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
      return '无';
  }
};

const Chart: FC<ChartProps> = ({ color = blue[2] }) => {
  const { actionList, config, emptyEmotion } = useContext(JourneyMapStore);

  const height = config?.height?.emotion || 300;

  const chartConfig: AreaConfig = {
    data: actionList,
    padding: [24, -10, 16, -10],
    tooltip: {
      formatter: (datum) => {
        if (!datum) return;

        const { emotion } = datum;

        return { name: '情绪值', value: getFormattedEmotion(emotion) };
      },
    },
    xField: 'name',
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

    animation: { appear: { animation: 'fade-in' } },
  };
  return emptyEmotion ? null : (
    <div className="avx-journey-map-chart">
      <Section height={height}>体验情绪</Section>
      <div style={{ width: '100%', height }}>
        <Area {...chartConfig} />
      </div>
    </div>
  );
};

export default Chart;
