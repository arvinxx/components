/**
 * compact: true
 */
import React from 'react';
import ImageGallery from '@arvinxu/image-gallery';

import { images } from './data';

const Demo = () => {
  return (
    <div
      style={{
        background: '#fafafa',
        padding: 24,
      }}
    >
      <ImageGallery data={images} darkBackground={'black'} />
    </div>
  );
};

export default Demo;
