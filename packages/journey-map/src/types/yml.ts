/**
 * 阶段
 */
import type { UserAction } from './type';

export interface YMLStage {
  /**
   * 阶段名称
   */
  name: string;
  /**
   * 该阶段的颜色
   */
  color?: string;
  /**
   * 该阶段所有用户行为
   */
  actions: UserAction[];
}

/**
 * 解析后的 YML 数据
 */
export interface YMLJourneyMap {
  /**
   * 配置项
   */
  config?: any;
  /**
   * 步骤
   */
  stages: YMLStage[];
}
