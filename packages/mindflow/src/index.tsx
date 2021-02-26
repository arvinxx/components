import React from 'react';
import type { FC } from 'react';
import { useGraph } from './hooks/useGraph';
import ErrorBoundary from './components/ErrorBoundary';
import type { GraphData } from './types';

export * from './types';

export interface MindflowProps {
  data: GraphData;
}

const Mindflow: FC<MindflowProps> = ({ data }) => {
  const { container, graph } = useGraph(data);

  console.log(graph);

  return (
    <ErrorBoundary>
      <div ref={container} style={{ width: '100%', height: 400 }} />
    </ErrorBoundary>
  );
};

export default Mindflow;
