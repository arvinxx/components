import React from 'react';
import ImageGallery from '@arvinxu/image-gallery';

import { images } from './data';

const Demo = () => {
  return <ImageGallery imageList={images} darkBackground={'black'} />;
};

export default Demo;
