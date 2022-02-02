import React from 'react';
import type { FC } from 'react';
import { Heatmap } from '@ant-design/charts';
import type { HeatmapConfig } from '@ant-design/charts';
import type { HeatmapCalendarData } from './type';

import { useDarkTheme } from './hooks';
import { mapDataCountToLevel, mapToMonth } from './utils';
import { registerShape } from './shape';

const colorMap = ['#eaecef', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
const colorMapDark = ['#161b22', '#003820', '#00602d', '#1d9d47', '#26d545'];

export * from './type';

export interface HeatmapCalendarProps {
  /**
   * 数据
   */
  data: HeatmapCalendarData;
  /**
   *  tooltip
   */
  tooltip?:
    | {
        /**
         * 显示文本
         */
        alias: string;
      }
    | boolean;
}

const HeatmapCalendar: FC<HeatmapCalendarProps> = ({ data, tooltip }) => {
  const { theme } = useDarkTheme();
  registerShape(theme);

  const config: HeatmapConfig = {
    data,
    height: 112,
    padding: [0, 0, 0, 20],
    xField: 'week',
    yField: 'day',
    colorField: 'total',
    color: (total) => {
      const level = mapDataCountToLevel(Number(total));
      return theme === 'light' ? colorMap[level] : colorMapDark[level];
    },
    reflect: 'y',
    shape: 'boundary-polygon',
    meta: {
      day: {
        type: 'cat',
        values: ['日', '一', '二', '三', '四', '五', '六'],
      },
      week: { type: 'cat' },
      total: {
        sync: true,
        alias: typeof tooltip !== 'boolean' ? tooltip?.alias || '总数' : '总数',
      },
      date: { type: 'cat' },
    },
    limitInPlot: true,
    yAxis: { grid: null },
    tooltip:
      typeof tooltip === 'boolean'
        ? false
        : {
            title: 'date',
            fields: ['total'],
            showMarkers: false,
          },
    interactions: [{ type: 'element-active' }],
    xAxis: {
      position: 'top',
      tickLine: null,
      line: null,
      label: {
        offset: 12,
        style: {
          fontSize: 12,
          fill: '#666',
          textBaseline: 'top',
        },
        formatter: (val) => mapToMonth(parseInt(val)),
      },
    },
  };

  return <Heatmap {...config} />;
};

export default HeatmapCalendar;
