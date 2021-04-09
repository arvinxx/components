/**
 * 阶段
 */
export interface Stage<T = string> {
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
  stages: Stage<T>[];
  /**
   * 用户行为
   */
  actions: Record<T, UserAction[]>;
}

/**
 * 用户行为类型
 */
export interface UserAction {
  /**
   * 行为名称
   */
  name: string;
  /**
   * 情绪得分
   * @minimum -2
   * @maximum 2
   * @TJS-type integer
   */
  emotion?: number;

  /**
   * action 的颜色
   */
  color?: string;
  /**
   * 说明
   */
  description?: string;

  /**
   * 想法
   */
  thoughts?: string[];

  /**
   * 痛点
   */
  painSpot?: string[];
}

export type SectionType =
  | 'stage'
  | 'action'
  | 'emotion'
  | 'thought'
  | 'painSpot'
  | 'chance';

/**
 * 图表配置
 */
export interface Config {
  /**
   * 显示左侧区域
   */
  section?: boolean;
  /**
   * 显示旅程图标题
   */
  title?: boolean;
  /**
   * 主色
   */
  color?: string;
  /**
   * 每个部分的高度
   */
  height?: Partial<Record<SectionType, number>>;
  /**
   * section 的排序
   */
  arrange?: Partial<SectionType>[];
}
