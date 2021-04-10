/**
 * 阶段
 */
import type { CommonSection, Config, JourneyMapData, UserAction } from './type';

/**
 * YML 的阶段类型
 */
interface YMLStage extends CommonSection {
  /**
   * 阶段名称
   */
  name: string;

  /**
   * 该阶段所有用户行为
   */
  actions: UserAction[];
}

/**
 * 解析后的 YML 数据
 */
export interface YMLJourneyMapRawData {
  /**
   * 标题名
   */
  title?: string;
  /**
   * 配置参数
   */
  config?: Config;
  /**
   * 步骤
   */
  stages: YMLStage[];
}

/**
 * 从 YML 转过来的数据
 * 包含有 title config 等其他参数
 */
export interface YMLJourneyMapData extends JourneyMapData {
  title?: string;
  config?: Config;
}
