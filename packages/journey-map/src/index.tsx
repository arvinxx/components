import React from 'react';
import type { FC, CSSProperties } from 'react';
import cls from 'classnames';

import Stage from './Stages';
import Chart from './Chart';
import Actions from './Actions';
import Thoughts from './Thoughts';

import { JourneyMapStore, useJourneyMap } from './useJourneyMap';
import type { Config, JourneyMapData } from './types';

import './styles.less';

export { JourneyMapData } from './types';

export interface JourneyMapProps {
  /**
   * 标题
   */
  title?: string;
  /**
   * 待渲染数据 或网址
   */
  data: JourneyMapData | string;
  /**
   * 回调方法
   */
  onChange?: (data: JourneyMapData) => void;

  /**
   * 配置参数
   */
  config?: Config;

  style?: CSSProperties;
  className?: string;
}

const JourneyMap: FC<JourneyMapProps> = ({
  title,
  data,
  style,
  className,
  onChange,
  config,
}) => {
  const store = useJourneyMap({ data, onChange, title, config });

  return (
    <JourneyMapStore.Provider value={store}>
      <div
        className={cls('avx-journey-map-container', className)}
        style={style}
      >
        {store.title ? (
          <div className="avx-journey-map-title">{store.title}</div>
        ) : null}
        <div className="avx-journey-map-content">
          <Stage />
          <Actions />
          <Chart />
          <Thoughts />
        </div>
      </div>
    </JourneyMapStore.Provider>
  );
};

export default JourneyMap;
