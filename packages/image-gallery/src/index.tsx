import type { FC } from 'react';
import React from 'react';
import { Button, Card, Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import {
  copySVG,
  copyPngFromSvg,
  downloadSVG,
  downloadPng,
  checkSvg,
  copyPng,
} from './utils';

import './style.less';
import type { ImageList } from './types';
import { YMLToJSON } from './utils/yml';
import CopyButton from './CopyButton';

export * from './types';

export interface ImageGalleryProps {
  /**
   * 图片清单
   */
  data: ImageList | string;
  /**
   * 暗色背景下默认的背景色
   * @default #1890ff
   */
  darkBackground?: string;
  /**
   * 使用的布局方式: 瀑布流与网格
   * @default masonry
   */
  layout?: 'masonry' | 'grid';
}

const ImageGallery: FC<ImageGalleryProps> = ({
  data,
  darkBackground,
  layout = 'masonry',
}) => {
  const imageList = typeof data === 'string' ? YMLToJSON(data).data : data;

  return (
    <div className={`avx-image-gallery-container avx-image-gallery-${layout}`}>
      {imageList.map((item, index) => {
        const { padding, url, title } = item;

        const isPng = !checkSvg(url);
        const backgroundColor =
          item.darkBackground || darkBackground || '#1890ff';

        const actionList = [
          isPng
            ? undefined
            : {
                onClick: () => copySVG(url),
                tooltip: '复制为 SVG',
                content: 'Svg',
              },
          {
            onClick: () => (isPng ? copyPng(url) : copyPngFromSvg(url)),
            tooltip: '复制为 Png',
            content: 'Png',
          },
        ].filter((a) => a);

        return (
          <div key={index} className="avx-image-gallery-item">
            <Card
              cover={
                <div
                  className="avx-image-gallery-image-ctn"
                  style={{
                    background: item.dark ? backgroundColor : undefined,
                    borderBottom: item.dark ? undefined : '1px solid #f3f3f3',
                  }}
                >
                  <img
                    className="avx-image-gallery-image"
                    style={{ padding }}
                    src={url}
                    alt={title}
                    onClick={() => window.open(url)}
                  />
                </div>
              }
              actions={[
                ...actionList.map((action) => (
                  <CopyButton
                    onClick={action.onClick}
                    content={action.content}
                    tooltip={action.tooltip}
                  />
                )),
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item onClick={() => downloadPng(url, title)}>
                        下载Png
                      </Menu.Item>
                      {isPng ? null : (
                        <Menu.Item onClick={() => downloadSVG(url, title)}>
                          下载Svg
                        </Menu.Item>
                      )}
                    </Menu>
                  }
                >
                  <Button type={'link'} className="avx-image-gallery-link">
                    <EllipsisOutlined key="ellipsis" />
                  </Button>
                </Dropdown>,
              ]}
            >
              <Card.Meta title={item.title} description={item.description} />
            </Card>
          </div>
        );
      })}
      <canvas id="canvas" style={{ display: 'none' }} />
    </div>
  );
};

export default ImageGallery;
