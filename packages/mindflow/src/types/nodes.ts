/**
 * 节点类型
 */
export type NodeType =
  | 'question' // 问题
  | 'action' // 行动点
  | 'idea' // 想法
  | 'subject' // 主题
  | 'information' // 信息
  | string;

/**
 * 作为支撑的类型
 */
export type ReferenceType =
  /**
   * 依据
   */
  | 'ground'
  /**
   * 正当理由
   */
  | 'warrant'
  /**
   * 支援
   */
  | 'backing'
  /**
   * 反驳
   */
  | 'rebuttal';

/**
 * 思维节点
 */
export interface NodeMindData {
  /**
   * 节点标题
   */
  title: string;
  /**
   * 节点的类型
   */
  type?: NodeType;
  /**
   * 有关问题的详细描述
   */
  description?: string;
  /**
   * 参考资料
   */
  references?: NodeMindData[];
  /**
   * 信息的类型
   */
  infoType?: 'url' | 'image' | 'text';
  /**
   * 相关参考资料的 Url
   */
  url?: string;
  /**
   * 理论依据的类型
   */
  referenceType?: ReferenceType;
}
