import type { ReactNode, CSSProperties } from 'react';

export interface Asset {
  title: string;
  /**
   * 图片 url
   */
  url: string;
  description?: string;

  dark?: boolean;
  /**
   * 如果需要反色的话
   * 可以设置反色的颜色
   */
  darkBackground?: string;
  /**
   * 允许添加间距
   */
  padding?: number | string;
  /**
   * 如果有 sketch
   */
  sketch?: string;
}

export type AssetList = Asset[];

export interface AssetGalleryData {
  data: AssetList;
}

export interface ImageEntryYML extends Omit<Asset, 'url' | 'title'> {
  标题: string;
  title?: string;
  描述?: string;
  反色?: boolean;
  反色背景色?: string;
  链接: string;
  url?: string;
}

export type AssetGalleryYML = ImageEntryYML[];

export type LayoutType = 'grid' | 'masonry';

export interface AssetGalleryProps {
  /**
   * 数据清单
   */
  data: AssetList | string;
  /**
   * 暗色背景下默认的背景色
   * @default #1890ff
   */
  darkBackground?: string;
  /**
   * 使用的布局方式: 瀑布流与网格
   * @default masonry
   */
  layout?: LayoutType;
  /**
   * 布局切换时的回调
   * @param layout
   */
  onLayoutChange?: (layout: LayoutType) => void;

  /**
   * 显示logo
   */
  logo?: ReactNode;

  /**
   * 列数
   */
  columns?: number;
  /**
   * 列数改变时的回调
   * @param columns
   */
  onColumnsChange?: (columns: number) => void;

  /**
   * 显示滑杆
   */
  showSlider?: boolean;

  /**
   * 样式
   */
  style?: CSSProperties;
}
