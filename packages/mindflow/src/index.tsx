import React from 'react';
import type { FC } from 'react';
import { useGraph } from './hooks/useGraph';
import ErrorBoundary from './components/ErrorBoundary';
import type { GraphData, MindflowData } from './types';

import './style.less';

export * from './types';

export interface MindflowProps {
  data: GraphData<MindflowData>;
  /**
   * 宽度
   */
  width?: number | string;
  /**
   * 高度
   */
  height?: number;
}

const Mindflow: FC<MindflowProps> = ({ data, width, height }) => {
  const { container, minimapContainer } = useGraph(data);

  return (
    <ErrorBoundary>
      <div className="mindflow-container">
        <div
          ref={container}
          style={{ width: width || '100%', height: height || 400 }}
        />
        <div ref={minimapContainer} className="mindflow-minimap" />
      </div>
    </ErrorBoundary>
  );
};

export default Mindflow;
