import type { ReactNode, CSSProperties } from 'react';

export interface Asset {
  /**
   * @title 标题
   */
  title: string;
  /**
   * @title 描述
   */
  description?: string;
  /**
   * @title 图片地址
   */
  url: string;
  /**
   * @title 是否反色
   */
  dark?: boolean;
  /**
   * @title 反色颜色
   * @description 如果需要反色的话 可以设置反色的颜色
   */
  darkBackground?: string;
  /**
   * @title 间距
   * 允许添加间距
   */
  padding?: number | string;
  /**
   * @title sketch 地址
   * sketch 的json 文件地址
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
   * @title 内容
   * @default ""
   */
  data: AssetList | string;
  /**
   * @title 暗色默认背景色
   * @description 暗色背景下默认的背景色
   * @default #1890ff
   */
  darkBackground?: string;
  /**
   * @title 布局方式
   * @enum ['grid','masonry']
   * @enumOptions  [{ label: '网格', value: 'grid' }, { label: '瀑布流', value: 'masonry' }]
   * @default grid
   */
  layout?: LayoutType;
  /**
   * @title 布局方式
   * @enum ['grid','masonry']
   * @enumOptions  [{ label: '网格', value: 'grid' }, { label: '瀑布流', value: 'masonry' }]
   * @default grid
   */
  defaultLayout?: LayoutType;
  /**
   * 布局切换时的回调
   * @ignore
   */
  onLayoutChange?: (layout: LayoutType) => void;
  /**
   * @title 显示logo
   */
  logo?: ReactNode;
  /**
   * @title 列数
   * @default 1
   */
  columns?: number;
  /**
   * @title 初始列数
   * @default 1
   */
  defaultColumns?: number;
  /**
   * 列数改变时的回调
   * @param columns
   * @ignore
   */
  onColumnsChange?: (columns: number) => void;
  /**
   * @title 缩放滑竿
   * @renderType radioGroup
   * @default true
   *  @enumOptions  [{ label: '显示', value: true }, { label: '隐藏', value: false }]
   */
  showSlider?: boolean;

  /**
   * 样式
   */
  style?: CSSProperties;
}
