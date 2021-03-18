import React from 'react';
import ImageGallery from '@arvinxu/image-gallery';

import { images } from './data';

const Demo = () => {
  return (
    <div
      style={{
        background: '#fafafa',
        padding: 40,
      }}
    >
      <ImageGallery imageList={images} darkBackground={'black'} />
    </div>
  );
};

export default Demo;
