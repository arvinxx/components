import type { FC } from 'react';

import type { AssetGalleryProps } from '../types';
import Header from './Header';
import { useStyles } from './Layout.style';

type LayoutProps = Pick<
  AssetGalleryProps,
  'layout' | 'showSlider' | 'columns' | 'logo' | 'onColumnsChange' | 'onLayoutChange' | 'style'
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
  const { styles, cx } = useStyles();
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
          className={cx(
            styles.container,
            layout === 'masonry' && styles.masonry,
            layout === 'grid' && styles.grid,
          )}
          style={{
            columnCount: layout === 'masonry' ? columns : undefined,
            gridTemplateColumns: layout === 'grid' ? `repeat(${columns}, 1fr)` : undefined,
          }}
        >
          {children}
        </div>
      }
    </div>
  );
};

export default Layout;
