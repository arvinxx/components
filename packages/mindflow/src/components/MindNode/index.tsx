import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';
import {
  CaretUpOutlined,
  CaretDownOutlined,
  EditOutlined,
  AimOutlined,
} from '@ant-design/icons';
import { Divider, Tooltip } from 'antd';
import chorma from 'chroma-js';
import type { ReactShape } from '@antv/x6-react-shape';
import cls from 'classnames';

import { mapColorToHex, mapTypeToColor, rgba2hex } from '../../utils';
import type { NodeData } from '../../types';
import CollapseIcon from './CollapseIcon';

import './style.less';
import { useFolded } from './useFolded';

interface BaseNodeProps {
  node?: ReactShape;
}

const MindNode: FC<BaseNodeProps> = ({ node }) => {
  const data = node.getData<NodeData>();
  const ref = useRef();

  const { unfolded, toggleNodeUnfold, cantFold } = useFolded(node);

  const {
    type,
    collapsed,
    leaf = true,
    title,
    description,
    references = [],
  } = data;

  const baseColor = chorma(mapColorToHex(mapTypeToColor(type)));

  const backgroundColor = rgba2hex(baseColor.alpha(0.1).rgba());

  useEffect(() => {
    // 展开的节点在前面显示
    node.setZIndex(unfolded ? 1000 : 0);
  }, [unfolded]);

  return (
    <div
      ref={ref}
      className={cls('mind-node-container', unfolded ? 'mind-node-shadow' : '')}
      style={{
        background: backgroundColor,
        borderColor: baseColor.alpha(0.1).hex(),
        borderLeftColor: baseColor.hex(),
      }}
    >
      <div className="mind-node-header">
        {cantFold ? null : (
          <span
            className="mind-node-arrow"
            onClick={() => {
              toggleNodeUnfold(node.id);
            }}
          >
            {unfolded ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </span>
        )}

        <div
          className={cls(
            'mind-node-title',
            unfolded ? 'mind-node-title-expand' : '',
          )}
        >
          {title}
        </div>
      </div>
      {unfolded ? (
        <div className="mind-node-unfolded">
          <div className="mind-node-desc">{description}</div>

          {references.length === 0 ? null : (
            <div className="mind-node-references">
              <Divider dashed style={{ margin: '4px 0 8px' }} />
              <span>📚 相关资料</span>
              {references.map((ref) => {
                return (
                  <a
                    key={ref.id}
                    href={ref.url}
                    target={'_blank'}
                    className="mind-node-references-item"
                  >
                    <div className="mind-node-references-dot" /> {ref.title}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      ) : null}
      <div
        className="mind-node-edit"
        style={{ color: baseColor.hex(), background: backgroundColor }}
      >
        <Tooltip title={'下钻'}>
          <AimOutlined style={{ marginRight: 8 }} />
        </Tooltip>
        <Tooltip title={'编辑'}>
          <EditOutlined />
        </Tooltip>
      </div>
      {leaf ? null : (
        <CollapseIcon
          id={node.id}
          color={baseColor.hex()}
          collapsed={collapsed}
        />
      )}
    </div>
  );
};

export default MindNode;
