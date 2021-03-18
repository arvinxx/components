import React from 'react';
import { render } from '@testing-library/react';

import ImageGallery from '@arvinxu/image-gallery';

describe('ImageGallery', () => {
  it('默认状态', () => {
    const { container } = render(<ImageGallery imageList={[]} />);
    expect(container).toMatchSnapshot();
  });
});
