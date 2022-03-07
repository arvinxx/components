import type { Node, Edge } from 'react-flow-renderer';
import type { NodeMindData } from './nodes';

export type BaseNode<T = any> = Omit<Node<T>, 'position'>;
export type BaseEdge<T = any> = Edge<T>;

export interface NodeData extends NodeMindData {
  collapsed?: boolean;
  leaf?: boolean;
}

/**
 * 生成符合ReactFlow数据结构的Data
 */
export interface FlowData<N = {}, E = {}> {
  nodes: BaseNode<N>[];
  edges: BaseEdge<E>[];
}
