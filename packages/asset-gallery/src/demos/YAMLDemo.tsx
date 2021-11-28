/**
 * compact: true
 */
import React from 'react';
import AssetGallery from '@arvinxu/asset-gallery';

import { yml } from './yml';

const YAMLDemo = () => {
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

export default YAMLDemo;
