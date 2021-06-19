/**
 * compact: true
 */
import React from 'react';
import AssetGallery from '@arvinxu/asset-gallery';

import { images } from './data';

const Demo = () => {
  return (
    <div
      style={{
        background: '#fafafa',
        padding: 24,
      }}
    >
      <AssetGallery data={images} darkBackground={'black'} />
    </div>
  );
};

export default Demo;
