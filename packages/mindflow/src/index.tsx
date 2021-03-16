import React from 'react';
import type { FC } from 'react';
import { useGraph } from './hooks/useGraph';
import ErrorBoundary from './components/ErrorBoundary';
import type { GraphData } from './types';

export * from './types';

export interface MindflowProps {
  data: GraphData;
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
  const { container, graph, minimapContainer } = useGraph(data);

  console.log(graph);

  return (
    <ErrorBoundary>
      <div
        ref={container}
        style={{ width: width || '100%', height: height || 400 }}
      />
      <div ref={minimapContainer} />
    </ErrorBoundary>
  );
};

export default Mindflow;
