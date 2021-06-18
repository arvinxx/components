import type { FC } from 'react';
import React from 'react';
import AssetCard from './AssetCard';

import './style.less';
import type { AssetList } from './types';
import { YMLToJSON } from './utils/yml';

export * from './types';

export interface AssetGalleryProps {
  /**
   * 图片清单
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
  layout?: 'masonry' | 'grid';
}

const AssetGallery: FC<AssetGalleryProps> = ({
  data,
  darkBackground,
  layout = 'masonry',
}) => {
  const imageList = typeof data === 'string' ? YMLToJSON(data).data : data;

  return (
    <div className={`avx-image-gallery-container avx-image-gallery-${layout}`}>
      {imageList.map((item, index) => {
        const { description, padding, url, title, dark, sketch } = item;

        const backgroundColor =
          item.darkBackground || darkBackground || '#1890ff';

        return (
          <AssetCard
            key={index}
            padding={padding}
            url={url}
            dark={dark}
            darkBackground={backgroundColor}
            title={title}
            description={description}
            sketch={sketch}
          />
        );
      })}
      <canvas id="canvas" style={{ display: 'none' }} />
    </div>
  );
};

export default AssetGallery;
