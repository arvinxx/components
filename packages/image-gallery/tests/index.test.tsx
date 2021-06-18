import React from 'react';
import { render } from '@testing-library/react';

import AssetGallery from '@arvinxu/image-gallery';

import { images, pngYML } from './data';

describe('AssetGallery', () => {
  it('默认状态', () => {
    const { container } = render(<AssetGallery data={[]} />);
    expect(container).toMatchSnapshot();
  });

  it('加载数据', () => {
    const { container } = render(<AssetGallery data={images} />);
    expect(container).toMatchSnapshot();
  });

  it('图片源为 PNG', () => {
    const { container } = render(<AssetGallery data={pngYML} />);
    expect(container).toMatchSnapshot();
  });
});
