import type { FC } from 'react';
import React from 'react';
import { Columns } from '@bedrock-layout/columns';
import { Inline } from '@bedrock-layout/inline';
import { Slider } from 'antd';

interface LayoutProps {
  layout?: 'grid' | 'masonry';
  grid?: {
    columns?: number;
    setColumn?: (value: number) => void;
    showSlider?: boolean;
  };
}

const Layout: FC<LayoutProps> = ({ children, layout, grid }) => {
  if (layout === 'grid') {
    const { columns, setColumn } = grid;
    return (
      <div>
        <Inline justify={'end'} style={{ paddingRight: 8 }}>
          <Slider
            style={{ width: 100 }}
            value={-columns}
            tooltipVisible={false}
            onChange={(v) => setColumn(-v)}
            max={-1}
            min={-4}
          />
        </Inline>
        <Columns columns={columns}>{children}</Columns>
      </div>
    );
  }

  if (layout === 'masonry')
    return (
      <div className={'avx-asset-gallery-container avx-asset-gallery-masonry'}>
        {children}
      </div>
    );
};

export default Layout;
