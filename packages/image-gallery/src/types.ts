interface ImageEntry {
  title: string;
  description: string;

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
   * 图片 url
   */
  url: string;
}

export type ImageList = ImageEntry[];
