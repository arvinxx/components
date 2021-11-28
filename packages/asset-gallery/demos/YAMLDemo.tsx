/**
 * compact: true
 */
import React from 'react';
import AssetGallery from '@arvinxu/asset-gallery';

import { yml } from './yml';

const YAMLDemo = () => {
  return (
    <AssetGallery
      data={yml}
      darkBackground={'black'}
      coverPadding={24}
      style={{
        background: '#fafafa',
        padding: 24,
      }}
    />
  );
};

export default YAMLDemo;
