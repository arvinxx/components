import type { FC } from 'react';
import React from 'react';
import { Columns } from '@bedrock-layout/columns';
import Header from './Header';

import type { AssetGalleryProps } from '../types';

type LayoutProps = Pick<
  AssetGalleryProps,
  | 'layout'
  | 'showSlider'
  | 'columns'
  | 'logo'
  | 'onColumnsChange'
  | 'onLayoutChange'
  | 'style'
>;

const Layout: FC<LayoutProps> = ({
  onColumnsChange,
  children,
  layout,
  logo,
  columns,
  onLayoutChange,
  showSlider,
  style,
}) => {
  return (
    <div style={style}>
      <Header
        layout={layout}
        onColumnsChange={onColumnsChange}
        columns={columns}
        logo={logo}
        onLayoutChange={onLayoutChange}
        showSlider={showSlider}
      />
      {layout === 'grid' ? (
        <Columns gutter={''} columns={columns}>
          {children}
        </Columns>
      ) : (
        <div
          className={'avx-asset-gallery-container avx-asset-gallery-masonry'}
          style={{ columnCount: columns }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Layout;
