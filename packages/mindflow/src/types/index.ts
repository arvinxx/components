export interface GraphData<T = {}> {
  nodes: BaseNode<T>[];
  edges: Edge[];
}

export interface BaseNode<BizData> {
  id: string;
  data?: BizData;
}

export interface Edge {
  source: string;
  target: string;
}

export interface NodeData extends MindflowData {
  collapsed?: boolean;
  hasChildren?: boolean;
}

export interface MindflowData {
  text: string;
  type?: string;
}
