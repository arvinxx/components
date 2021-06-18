import React from 'react';
import { render } from '@testing-library/react';

import ImageGallery from '@arvinxu/image-gallery';

import { images, pngYML } from './data';

describe('ImageGallery', () => {
  it('默认状态', () => {
    const { container } = render(<ImageGallery data={[]} />);
    expect(container).toMatchSnapshot();
  });

  it('加载数据', () => {
    const { container } = render(<ImageGallery data={images} />);
    expect(container).toMatchSnapshot();
  });

  it('图片源为 PNG', () => {
    const { container } = render(<ImageGallery data={pngYML} />);
    expect(container).toMatchSnapshot();
  });
});
