/**
 * compact: true
 */
import React from 'react';
import AssetGallery from '@arvinxu/asset-gallery';

import { yml } from './png';

const PngDemo = () => {
  return (
    <div
      style={{
        background: '#fafafa',
        padding: 24,
      }}
    >
      <AssetGallery data={yml} darkBackground={'black'} />
    </div>
  );
};

export default PngDemo;
