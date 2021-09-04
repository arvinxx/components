import React, { useState } from 'react';
import { render, act } from '@testing-library/react';

import Header from './Header';
import { LayoutType } from '../types';

describe('Header', () => {
  it('默认', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
  it('有 logo', () => {
    const { container } = render(<Header logo={'123'} showSlider />);
    expect(container).toMatchSnapshot();
  });
  it('切换布局', async () => {
    const App = () => {
      const [layout, setLayout] = useState<LayoutType>('grid');
      return (
        <Header
          logo={'123'}
          layout={layout}
          onLayoutChange={setLayout}
          showSlider
        />
      );
    };
    act(() => {});
    const { findByTestId } = render(<App />);
    const masonryBtn = await findByTestId('masonry-icon');
    const gridBtn = await findByTestId('grid-icon');

    masonryBtn.click();
    gridBtn.click();
  });
});
