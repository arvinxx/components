import React from 'react';
import type { FC, CSSProperties } from 'react';
import cls from 'classnames';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from './components';

import Stage from './Stages';
import Chart from './Chart';
import Actions from './Actions';
import Thoughts from './Thoughts';
import PainPoints from './PainPoints';

import { JourneyMapStore, useJourneyMap } from './useJourneyMap';
import type { Config, JourneyMapData, SectionType } from './types';

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

  const sections: Record<SectionType, FC> = {
    action: Actions,
    stage: Stage,
    emotion: Chart,
    thought: Thoughts,
    painPoint: PainPoints,
    chance: () => <div />,
  };

  const list = store.config?.sections || [
    'stage',
    'action',
    'emotion',
    'thought',
  ];

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <JourneyMapStore.Provider value={store}>
        <div
          className={cls('avx-journey-map-container', className)}
          style={style}
        >
          {store.title ? (
            <div className="avx-journey-map-title">{store.title}</div>
          ) : null}
          <div className="avx-journey-map-content">
            {list.map((a) => {
              const Section = sections[a];
              return <Section key={a} />;
            })}
          </div>
        </div>
      </JourneyMapStore.Provider>
    </ErrorBoundary>
  );
};

export default JourneyMap;
