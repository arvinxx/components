import type { FC } from 'react';
import React from 'react';
import cls from 'classnames';

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
      {
        <div
          className={cls(
            'avx-asset-gallery-container',
            `avx-asset-gallery-${layout}`,
          )}
          style={{
            columnCount: layout === 'masonry' ? columns : undefined,
            gridTemplateColumns:
              layout === 'grid' ? `repeat(${columns}, 1fr)` : undefined,
          }}
        >
          {children}
        </div>
      }
    </div>
  );
};

export default Layout;
