import React from 'react';
import type { FC } from 'react';

import { useGraph } from './hooks/useGraph';
import ErrorBoundary from './components/ErrorBoundary';
import type { MindflowData } from './types';

import './style.less';

export { useMindflowService as useMindflowContext } from './store/useMindflowContext';
export * from './types';

export interface MindflowProps {
  /**
   * 待消费数据
   */
  data: MindflowData;
  /**
   * 画布宽度
   */
  width?: number | string;
  /**
   * 单个节点的宽度
   */
  nodeWidth?: number;
  /**
   * 画布高度
   * @default 400
   */
  height?: number;
  /**
   * 点击节点操作
   */
  onNodeClick?: (node) => void;
}

const Mindflow: FC<MindflowProps> = ({ data, width, height }) => {
  const { container, minimapContainer } = useGraph(data);

  return (
    <ErrorBoundary>
      <div className="mindflow-container">
        <div
          ref={container}
          style={{ width: width || '100%', height: height || 400, flex: 1 }}
        />
        <div ref={minimapContainer} className="mindflow-minimap" />
      </div>
    </ErrorBoundary>
  );
};

export default Mindflow;
