import type {
  OnEdgesChange,
  OnNodesChange,
} from 'react-flow-renderer/dist/types';

import type { NodeMindData } from './nodes';
import type { FlowData } from './flow';

export type MindflowData = FlowData<NodeMindData, any>;

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
   * 节点的点击回调
   */
  onNodeClick?: (node) => void;
  onNodesChange?: OnNodesChange;
  onEdgesChange?: OnEdgesChange;
}
