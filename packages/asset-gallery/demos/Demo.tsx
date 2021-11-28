/**
 * compact: true
 */
import React from 'react';
import AssetGallery from '@arvinxu/asset-gallery';

import { images } from './data';

const Demo = () => {
  return (
    <AssetGallery
      style={{
        background: '#fafafa',
        padding: 24,
      }}
      data={images}
      darkBackground={'black'}
      coverPadding={24}
    />
  );
};

export default Demo;
