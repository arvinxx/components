import React from 'react';
import type { FC, CSSProperties } from 'react';
import cls from 'classnames';

import { Chart, Flow } from './components';
import { JournalMapStore, useJournalMap } from './useJournalMap';
import type { JournalMapData } from './type';

export interface JournalMapProps {
  /**
   * 待渲染数据 或网址
   */
  data: JournalMapData | string;
  /**
   * 回调方法
   * @param data
   */
  onChange?: (data: JournalMapData) => void;

  style?: CSSProperties;
  className?: string;
}

export { JournalMapData } from './type';

const JournalMap: FC<JournalMapProps> = ({
  data,
  style,
  className,
  onChange,
}) => {
  const store = useJournalMap(data, onChange);

  return (
    <JournalMapStore.Provider value={store}>
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
