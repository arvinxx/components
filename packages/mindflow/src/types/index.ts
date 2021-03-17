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
  leaf?: boolean;
}

interface Reference {
  /**
   * 参考资料的 id
   */
  id: string;
  /**
   * 参考资料标题
   */
  title: string;
  /**
   * 相关参考资料的 Url
   */
  url?: string;
}

type NodeType = 'question' | 'action' | 'idea' | 'subject' | string;

export interface MindflowData {
  title: string;
  type?: NodeType;
  /**
   * 有关问题的详细描述
   */
  description?: string;
  references?: Reference[];
}
