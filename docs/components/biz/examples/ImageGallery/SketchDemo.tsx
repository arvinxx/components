/**
 * compact: true
 */
import React from 'react';
import AssetGallery from '@arvinxu/image-gallery';

import { sketch } from './sketch';

const SketchDemo = () => {
  return (
    <div
      style={{
        background: '#fafafa',
        padding: 24,
      }}
    >
      <AssetGallery data={sketch} darkBackground={'black'} layout={'grid'} />
    </div>
  );
};

export default SketchDemo;
