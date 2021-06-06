/**
 * compact: true
 */
import React from 'react';
import ImageGallery from '@arvinxu/image-gallery';

import { yml } from './yml';

const YAMLDemo = () => {
  return (
    <div
      style={{
        background: '#fafafa',
        padding: 24,
      }}
    >
      <ImageGallery data={yml} darkBackground={'black'} />
    </div>
  );
};

export default YAMLDemo;
