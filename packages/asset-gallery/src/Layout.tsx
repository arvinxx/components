import type { FC, ReactNode } from 'react';
import React from 'react';
import { Columns } from '@bedrock-layout/columns';
import { Slider } from 'antd';

export interface LayoutProps {
  layout?: 'grid' | 'masonry';
  grid?: {
    columns?: number;
    setColumn?: (value: number) => void;
    showSlider?: boolean;
  };
  logo?: ReactNode | string;
}

const Layout: FC<LayoutProps> = ({ children, layout, grid, logo }) => {
  if (layout === 'grid') {
    const { columns, setColumn } = grid;
    return (
      <div>
        <div
          style={{
            padding: '0 8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            {typeof logo === 'string' ? (
              <img src={logo} width={40} alt="logo" />
            ) : (
              logo
            )}
          </div>
          <Slider
            style={{ width: 100 }}
            value={-columns}
            tooltipVisible={false}
            onChange={(v) => setColumn(-v)}
            max={-1}
            min={-4}
          />
        </div>
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
