import type { FC } from 'react';
import React from 'react';
import useMergeValue from 'use-merge-value';

import Layout from './components/Layout';

import AssetCard from './components/AssetCard';

import { YMLToJSON } from './utils/yml';
import type { AssetGalleryProps } from './types';

import './style.less';

const AssetGallery: FC<AssetGalleryProps> = ({
  data,
  darkBackground,
  layout: layoutProps,
  logo,
  showSlider = true,
  columns: columnsProps,
  style,
}) => {
  const [columns, setColumn] = useMergeValue(4, { defaultValue: columnsProps });
  const [layout, setLayout] = useMergeValue('masonry', {
    defaultValue: layoutProps,
  });

  const imageList = typeof data === 'string' ? YMLToJSON(data).data : data;

  return (
    <Layout
      style={style}
      layout={layout}
      onLayoutChange={setLayout}
      logo={logo}
      columns={columns}
      onColumnsChange={setColumn}
      showSlider={showSlider}
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
