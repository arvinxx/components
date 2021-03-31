/**
 * 阶段
 */
export interface Step<T = string> {
  id: T;
  name: string;
  /**
   * 该步骤的颜色
   */
  color?: string;
}

/**
 * 用户旅程地图数据
 */
export interface JournalMapData<T extends string = string> {
  /**
   * 大的步骤
   */
  steps: Step<T>[];
  /**
   * 用户行为
   */
  actions: Record<T, UserAction[]>;
}

/**
 * 用户行为
 */
export interface UserAction {
  /**
   * 行为名称
   */
  title: string;
  /**
   * 说明
   */
  description?: string;

  /**
   * 有关的想法
   */
  thoughts?: string[];
  /**
   * 情绪得分
   */
  emotion: number;
  /**
   * 痛点
   */
  painSpot?: string[];
}
