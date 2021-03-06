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

export interface ImageEntryYML {
  标题: string;
  描述?: string;

  反色?: boolean;
  /**
   * 如果需要反色的话
   * 可以设置反色的颜色
   */
  反色背景色?: string;
  /**
   * 图片 url
   */
  链接: string;
  /**
   * 允许添加间距
   */
  padding?: number | string;

  /**
   * sketch 数据
   */
  sketch?: string;
}
export type AssetGalleryYML = ImageEntryYML[];
