import type { FC, ReactNode } from 'react';
import React, { useState } from 'react';
// import useMergeValue from 'use-merge-value';

import Layout from './Layout';

import AssetCard from './AssetCard';

import { YMLToJSON } from './utils/yml';
import type { AssetList } from './types';
import './style.less';

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
  /**
   * 显示logo
   */
  logo?: ReactNode;

  /**
   * 配置网格
   */
  grid?: {
    /**
     * 列数
     */
    columns?: number;
    /**
     * 显示滑杆
     */
    showSlider?: boolean;
  };
}

const AssetGallery: FC<AssetGalleryProps> = ({
  data,
  darkBackground,
  layout = 'masonry',
  grid = { showSlider: true },
  logo,
}) => {
  const [columns, setColumn] = useState(1);

  const imageList = typeof data === 'string' ? YMLToJSON(data).data : data;

  return (
    <Layout
      layout={layout}
      grid={{ columns, setColumn, showSlider: grid.showSlider }}
      logo={logo}
    >
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
    </Layout>
  );
};

export default AssetGallery;
