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

import CopyButton from './CopyButton';
import { Asset } from './types';
import { copySketch } from './utils/sketch';

export * from './types';

export interface AssetGalleryProps extends Asset {}

const AssetCard: FC<Asset> = ({
  padding,
  url,
  title,
  darkBackground,
  dark,
  description,
  sketch,
}) => {
  const isSketch = !!sketch;
  const isSvg = !isSketch && checkSvg(url);
  const backgroundColor = darkBackground;

  const actionList = isSketch
    ? [
        {
          onClick: () => copySketch(sketch),
          content: '复制为 Sketch 组件',
        },
      ]
    : [
        isSvg
          ? {
              onClick: () => copySVG(url),
              tooltip: '复制为 SVG',
              content: 'Svg',
            }
          : undefined,
        {
          onClick: () => (isSvg ? copyPngFromSvg(url) : copyPng(url)),
          tooltip: '复制为 Png',
          content: 'Png',
        },
      ].filter((a) => a);

  return (
    <div className="avx-image-gallery-item">
      <Card
        cover={
          <div
            className="avx-image-gallery-image-ctn"
            style={{
              background: dark ? backgroundColor : undefined,
              borderBottom: dark ? undefined : '1px solid #f3f3f3',
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
          isSketch ? undefined : (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item onClick={() => downloadPng(url, title)}>
                    下载Png
                  </Menu.Item>
                  {isSvg ? null : (
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
            </Dropdown>
          ),
        ].filter((a) => a)}
      >
        <Card.Meta title={title} description={description} />
      </Card>
    </div>
  );
};

export default AssetCard;
