import React from 'react';
import { render } from '@testing-library/react';

import AssetCard from './AssetCard';

describe('AssetCard', () => {
  it('图片 Png', () => {
    const { container } = render(
      <AssetCard
        title={'测试'}
        url={
          'https://gw.alipayobjects.com/zos/antfincdn/G5sZluNGGA/25c4fe16-7d52-4b32-904e-3eccb4a1ff47.png'
        }
      />,
    );
    expect(container).toMatchSnapshot();
  });
  it('图片 Svg', () => {
    const { container } = render(
      <AssetCard
        title={'Svg 测试'}
        url={'https://gw.alipayobjects.com/zos/antfincdn/LFmaI3%26OJh/logo.svg'}
      />,
    );
    expect(container).toMatchSnapshot();
  });
  it('Sketch 测试', () => {
    const { container } = render(
      <AssetCard
        title={'Sketch 测试'}
        url={'https://gw.alipayobjects.com/zos/antfincdn/LFmaI3%26OJh/logo.svg'}
        sketch={
          'https://gw.alipayobjects.com/os/kitchen/oLQZFZVkmdvqpKRQDCuU.json'
        }
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
