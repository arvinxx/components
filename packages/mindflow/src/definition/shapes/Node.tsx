import type { FC } from 'react';
import React from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import type { ReactShape } from '@antv/x6-react-shape';
import { mapColorToHex, mapTypeToColor } from '../../utils';
import chorma from 'chroma-js';

import type { MindflowData } from '../../types';

import './Node.less';

interface BaseNodeProps {
  node?: ReactShape;
}

export const Node: FC<BaseNodeProps> = ({ node }) => {
  const data = node.getData<MindflowData>();
  const { type, collapsed, hasChildren = true } = data;
  const baseColor = chorma(mapColorToHex(mapTypeToColor(type)));

  return (
    <div
      className="mind-node-container"
      style={{
        background: baseColor.alpha(0.1).hex(),
        borderColor: baseColor.alpha(0.3).hex(),
        borderLeftColor: baseColor.hex(),
      }}
    >
      <div className="mind-node-title">{data.text}</div>

      {hasChildren ? (
        <div
          className="mind-node-collapse"
          style={{ borderColor: baseColor.hex() }}
        >
          {collapsed ? (
            <PlusOutlined
              className="mind-node-collapse-icon"
              style={{ color: baseColor.hex() }}
            />
          ) : (
            <MinusOutlined
              className="mind-node-collapse-icon"
              style={{ color: baseColor.hex() }}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};
