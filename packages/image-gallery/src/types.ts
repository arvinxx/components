export interface ImageEntry {
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
}

export type ImageList = ImageEntry[];

export interface ImageGalleryData {
  data: ImageList;
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
}
export interface ImageGalleryYML {
  素材列表: ImageEntryYML[];
}
