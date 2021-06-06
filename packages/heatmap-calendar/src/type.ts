/**
 * 热力图数据结构
 */
export interface ItemData {
  /**
   * 日期
   */
  date: string;
  /**
   * 天数
   */
  day: number;
  /**
   * 月份
   */
  month: number;
  /**
   * 热点数
   */
  total: number;
  /**
   * 周
   */
  week: number;
  /**
   * 年
   */
  year: number;
}

export type HeatmapCalendarData = ItemData[];
