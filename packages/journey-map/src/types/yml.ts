/**
 * 阶段
 */
import type { JourneyMapData, UserAction } from './type';

interface YMLStage {
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
 * 图表配置
 */
interface Config {
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
}

/**
 * 解析后的 YML 数据
 */
export interface YMLJourneyMap {
  /**
   * 旅程图名称
   */
  title?: string;
  /**
   * 配置项
   */
  config?: Config;
  /**
   * 步骤
   */
  stages: YMLStage[];
}

/**
 * 从 YML 转过来的数据
 * 包含有 title config 等其他参数项
 */
export interface YMLJourneyMapData extends JourneyMapData {
  title?: string;
  config?: Config;
}
