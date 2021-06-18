/**
 * compact: true
 */
import React from 'react';
import AssetGallery from '@arvinxu/image-gallery';

import { sketch } from './sketch';

const Sketch = () => {
  return (
    <div
      style={{
        background: '#fafafa',
        padding: 24,
      }}
    >
      <AssetGallery data={sketch} darkBackground={'black'} />
    </div>
  );
};

export default Sketch;
