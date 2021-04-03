import type { MindflowEdge, MindflowNode } from './mindflow';

export interface GraphData<Node = {}, Edge = {}, EdgeType = string> {
  nodes: BaseNode<Node>[];
  edges: BaseEdge<Edge, EdgeType>[];
}

export interface BaseNode<BizData> {
  id: string;
  data?: BizData;
}

export interface EdgePort {
  cell: string;
  port: string;
}

export interface BaseEdge<BizData, T = string> {
  source: T;
  target: T;
  data?: BizData;
}

export interface NodeData extends MindflowNode {
  collapsed?: boolean;
  leaf?: boolean;
}

export type PreMindflowData = GraphData<MindflowNode, MindflowEdge>;
export type MindflowData = GraphData<
  MindflowNode,
  MindflowEdge,
  EdgePort | string
>;
