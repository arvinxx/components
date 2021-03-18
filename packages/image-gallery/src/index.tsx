import type { FC } from 'react';
import React from 'react';
import { Button, Card, Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import { useCopy } from './useCopy';
import { useDownload } from './useDownload';

import './style.less';
import type { ImageList } from './types';

export * from './types';

export interface ImageGalleryProps {
  /**
   * 图片清单
   */
  imageList: ImageList;
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

const ImageGallery: FC<ImageGalleryProps> = ({ imageList, darkBackground }) => {
  const { copyPng, copySVG } = useCopy();
  const { downloadPng, downloadSVG } = useDownload();

  return (
    <div className="avx-image-gallery-container avx-image-gallery-masonry">
      {imageList.map((item, index) => {
        const { padding, url, title } = item;

        const backgroundColor =
          item.darkBackground || darkBackground || '#1890ff';

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
                <Button
                  type={'link'}
                  className="avx-image-gallery-link"
                  onClick={() => copySVG(url)}
                >
                  复制SVG
                </Button>,

                <Button
                  type={'link'}
                  className="avx-image-gallery-link"
                  onClick={() => copyPng(url)}
                >
                  复制PNG
                </Button>,
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item onClick={() => downloadPng(url, title)}>
                        下载PNG
                      </Menu.Item>
                      <Menu.Item onClick={() => downloadSVG(url, title)}>
                        下载SVG
                      </Menu.Item>
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
