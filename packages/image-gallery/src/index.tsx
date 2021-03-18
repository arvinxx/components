import type { FC } from 'react';
import { Button, Card, Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import { useCopy } from './useCopy';
import { useDownload } from './useDownload';

import './style.less';
import type { ImageList } from './types';

export * from './types';

export interface ImageGalleryProps {
  imageList: ImageList;
}

const ImageGallery: FC<ImageGalleryProps> = ({ imageList }) => {
  const { copyPng, copySVG } = useCopy();
  const { downloadPng, downloadSVG } = useDownload();

  return (
    <div className="masonry">
      {imageList.map((item, index) => (
        <div key={index} className="item">
          <Card
            cover={
              <div>
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    background: item.dark ? '#3978f7' : undefined,
                    borderBottom: item.dark ? undefined : '1px solid #f3f3f3',
                    padding: 24,
                    cursor: 'pointer',
                  }}
                  src={item.url}
                  alt={item.title}
                  onClick={() => window.open(item.url)}
                />
              </div>
            }
            actions={[
              <Button
                type={'link'}
                className="link"
                onClick={() => copySVG(item.url)}
              >
                复制SVG
              </Button>,

              <Button
                type={'link'}
                className="link"
                onClick={() => copyPng(item.url)}
              >
                复制PNG
              </Button>,
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item
                      onClick={() => downloadPng(item.url, item.title)}
                    >
                      下载PNG
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => downloadSVG(item.url, item.title)}
                    >
                      下载SVG
                    </Menu.Item>
                  </Menu>
                }
              >
                <Button type={'link'} className="link">
                  <EllipsisOutlined key="ellipsis" />
                </Button>
              </Dropdown>,
            ]}
          >
            <Card.Meta title={item.title} description={item.description} />
          </Card>
        </div>
      ))}
      <canvas id="canvas" style={{ display: 'none' }} />
    </div>
  );
};

export default ImageGallery;
