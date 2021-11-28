/**
 * compact: true
 */
import React from 'react';
import AssetGallery from '@arvinxu/asset-gallery';

import { sketch } from './sketch';

const SketchDemo = () => {
  return (
    <div
      style={{
        background: '#fafafa',
        padding: 24,
      }}
    >
      <AssetGallery
        logo={
          'https://gw.alipayobjects.com/zos/antfincdn/mj85r7V5aX/konggu.svg'
        }
        data={sketch}
        darkBackground={'black'}
        layout={'grid'}
        columns={2}
      />
    </div>
  );
};

export default SketchDemo;
