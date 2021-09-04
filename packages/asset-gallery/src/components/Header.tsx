import { Slider, Space } from 'antd';
import type { FC } from 'react';
import React from 'react';
import type { AssetGalleryProps } from '../types';
import LayoutButton from './LayoutButton';

type HeaderProps = Pick<
  AssetGalleryProps,
  | 'logo'
  | 'columns'
  | 'layout'
  | 'onColumnsChange'
  | 'onLayoutChange'
  | 'showSlider'
>;

const Header: FC<HeaderProps> = ({
  logo,
  onColumnsChange,
  columns,
  layout,
  onLayoutChange,
  showSlider,
}) => {
  const isMasonry = layout === 'masonry';
  return (
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
      <Space>
        <Space size={0}>
          <LayoutButton
            icon={{
              default:
                'https://gw.alipayobjects.com/zos/antfincdn/a72YnCXMKW/masonry-default.svg',
              active:
                'https://gw.alipayobjects.com/zos/antfincdn/gACoIFWH4G/masonry.svg',
            }}
            onClick={() => {
              onLayoutChange('masonry');
            }}
            isActive={isMasonry}
            tooltip={'瀑布流布局'}
            testId={'masonry-icon'}
          />
          <LayoutButton
            icon={{
              default:
                'https://gw.alipayobjects.com/zos/antfincdn/sLiHETRbAt/grid.svg',
              active:
                'https://gw.alipayobjects.com/zos/antfincdn/lr6NsCRih%24/grid-active.svg',
            }}
            onClick={() => {
              onLayoutChange('grid');
            }}
            isActive={!isMasonry}
            tooltip={'网格布局'}
            testId={'grid-icon'}
          />
        </Space>
        {showSlider ? (
          <Slider
            style={{ width: 100 }}
            value={-columns}
            tooltipVisible={false}
            onChange={
              /* istanbul ignore next */
              (v) => onColumnsChange(-v)
            }
            max={-1}
            min={-4}
          />
        ) : null}
      </Space>
    </div>
  );
};
export default Header;
