import React from 'react';
import type { FC, CSSProperties } from 'react';
import cls from 'classnames';

import Stage from './Stage';
import Chart from './Chart';
import Actions from './Actions';

import { JourneyMapStore, useJourneyMap } from './useJourneyMap';
import type { JourneyMapData } from './types';

import './styles.less';

export { JourneyMapData } from './types';

export interface JourneyMapProps {
  /**
   * 待渲染数据 或网址
   */
  data: JourneyMapData | string;
  /**
   * 回调方法
   */
  onChange?: (data: JourneyMapData) => void;

  style?: CSSProperties;
  className?: string;
}

const JourneyMap: FC<JourneyMapProps> = ({
  data,
  style,
  className,
  onChange,
}) => {
  const store = useJourneyMap(data, onChange);

  return (
    <JourneyMapStore.Provider value={store}>
      <div
        className={cls('avx-journey-map-container', className)}
        style={style}
      >
        <div className="avx-journey-map-content">
          <Stage />
          <Actions />
          <Chart />
        </div>
      </div>
    </JourneyMapStore.Provider>
  );
};

export default JourneyMap;