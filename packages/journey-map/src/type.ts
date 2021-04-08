/**
 * 阶段
 */
export interface Step<T = string> {
  /**
   * 阶段id
   * @TJS-type string
   */
  id: T;
  /**
   * 阶段名称
   */
  name: string;
  /**
   * 该阶段的颜色
   */
  color?: string;
}

/**
 * 用户旅程地图数据
 */
export interface JourneyMapData<T extends string = string> {
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

/**
 * 解析后的 YML 数据
 */
export interface JourneyMapYML<T extends string = string> {
  /**
   * 步骤
   */
  steps: Step<T>[];
  /**
   * 用户行为
   */
  actions: Record<T, Record<T, number>[]>;
}
