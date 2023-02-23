import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Card, Dropdown, Menu } from 'antd';
import type { FC } from 'react';
import type { Asset } from '../types';

import { checkSvg, copyPng, copyPngFromSvg, copySVG, downloadPng, downloadSVG } from '../utils';
import { copySketch } from '../utils/sketch';
import ActionButton from './ActionButton';
import { useStyles } from './AssetCard.style';

const AssetCard: FC<Asset> = ({
  padding = 12,
  url,
  title,
  darkBackground,
  dark,
  description,
  sketch,
}) => {
  const { styles, cx } = useStyles();
  const isSketch = !!sketch;
  const isSvg = !isSketch && checkSvg(url);

  // eslint-disable-next-line no-nested-ternary
  const assetType = isSketch ? 'sketch' : isSvg ? 'svg' : 'img';

  const backgroundColor = darkBackground;

  const getActionList = (type: 'sketch' | 'svg' | 'img') => {
    switch (type) {
      case 'sketch':
        return [
          {
            onClick:
              /* istanbul ignore next */
              () => copySketch(sketch),
            content: 'Sketch',
            tooltip: '复制为 Sketch 组件',
          },
          {
            onClick:
              /* istanbul ignore next */
              () => copyPng(url),
            tooltip: '复制为 Png',
            content: 'Png',
          },
        ];

      case 'img':
        return [
          {
            onClick:
              /* istanbul ignore next */
              () => copyPng(url),
            tooltip: '复制为 Png',
            content: 'Png',
          },
        ];
      case 'svg':
        return [
          {
            onClick:
              /* istanbul ignore next */
              () => copySVG(url),
            tooltip: '复制为 SVG',
            content: 'Svg',
          },
          {
            onClick:
              /* istanbul ignore next */
              () => copyPngFromSvg(url),
            tooltip: '复制为 Png',
            content: 'Png',
          },
        ];
      /* istanbul ignore next */
      default:
        return [];
    }
  };

  const actionList = getActionList(assetType);

  const typeImage = () => {
    switch (assetType) {
      case 'sketch':
        return 'https://gw.alipayobjects.com/zos/antfincdn/cMiSSL1I2m/sketch.svg';
      /* istanbul ignore next */
      default:
      case 'img':
        return 'https://gw.alipayobjects.com/zos/antfincdn/wV6Zp%243hgH/img.svg';
      case 'svg':
        return 'https://gw.alipayobjects.com/zos/antfincdn/lBMmJ5U0Pr/svg.svg';
    }
  };

  const noBody = !(title || description);

  return (
    <div className={styles.wrapper}>
      <Card
        className={styles.item}
        cover={
          <div
            className={cx(styles.imgCtn)}
            style={{
              background: dark ? backgroundColor : undefined,
            }}
          >
            <div className={styles.imgType}>
              <img src={typeImage()} alt="sketch" width={18} height={18} />
            </div>
            <img
              className={styles.image}
              style={{ padding }}
              src={url}
              alt={title}
              onClick={
                /* istanbul ignore next */
                () => window.open(url)
              }
            />
          </div>
        }
        bordered={false}
        actions={[
          ...actionList.map((action) => (
            <ActionButton
              key={action.content}
              onClick={action.onClick}
              content={action.content}
              tooltip={action.tooltip}
              // icon={action.icon}
            />
          )),
          isSketch ? undefined : (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item
                    onClick={
                      /* istanbul ignore next */
                      () => downloadPng(url, title)
                    }
                  >
                    下载Png
                  </Menu.Item>
                  {isSvg ? (
                    <Menu.Item
                      onClick={
                        /* istanbul ignore next */
                        () => downloadSVG(url, title)
                      }
                    >
                      下载Svg
                    </Menu.Item>
                  ) : null}
                </Menu>
              }
            >
              <Button type={'link'} className={styles.link}>
                <EllipsisOutlined key="ellipsis" />
              </Button>
            </Dropdown>
          ),
        ].filter((a) => a)}
        bodyStyle={{
          padding: noBody ? 0 : undefined,
        }}
      >
        {noBody ? null : <Card.Meta title={title} description={description} />}
      </Card>
    </div>
  );
};

export default AssetCard;
