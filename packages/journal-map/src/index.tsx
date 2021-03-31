import React from 'react';
import type { FC, CSSProperties } from 'react';
import cls from 'classnames';

import { Chart, Flow } from './components';
import { JournalMapStore } from './useJournalMap';
import type { JournalMapData } from './type';

export interface JournalMapProps {
  /**
   * 待渲染数据
   */
  data: JournalMapData;
  style?: CSSProperties;
  className?: string;
}

export { JournalMapData } from './type';

const JournalMap: FC<JournalMapProps> = ({ data, style, className }) => {
  return (
    <JournalMapStore.Provider initialState={data}>
      <div
        className={cls('avx-journal-map-container', className)}
        style={style}
      >
        <div className="avx-journal-map-content">
          <Flow />
          <Chart />
        </div>
      </div>
    </JournalMapStore.Provider>
  );
};

export default JournalMap;
