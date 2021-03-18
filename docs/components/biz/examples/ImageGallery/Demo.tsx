import React from 'react';
import ImageGallery from '@arvinxu/image-gallery';

const images = [
  {
    title: '组件库 Logo',
    description: '首选使用',
    url: 'https://gw.alipayobjects.com/zos/antfincdn/25czckBZI1/1.svg',
  },
];
const Demo = () => {
  return <ImageGallery imageList={images} />;
};

export default Demo;
