import type { MindflowEdge, MindflowNode } from './mindflow';

export interface GraphData<Node = {}, Edge = {}> {
  nodes: BaseNode<Node>[];
  edges: BaseEdge<Edge>[];
}

export interface BaseNode<BizData> {
  id: string;
  data?: BizData;
}

export interface BaseEdge<BizData> {
  source: string;
  target: string;
  data?: BizData;
}

export interface NodeData extends MindflowNode {
  collapsed?: boolean;
  leaf?: boolean;
}

export type MindflowData = GraphData<MindflowNode, MindflowEdge>;
