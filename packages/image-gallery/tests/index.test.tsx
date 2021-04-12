import React from 'react';
import { render } from '@testing-library/react';

import ImageGallery from '@arvinxu/image-gallery';

import { images } from './data';

describe('ImageGallery', () => {
  it('默认状态', () => {
    const { container } = render(<ImageGallery imageList={[]} />);
    expect(container).toMatchSnapshot();
  });

  it('加载数据', () => {
    const { container } = render(<ImageGallery imageList={images} />);
    expect(container).toMatchSnapshot();
  });
});