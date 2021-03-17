import type { FC } from 'react';
import React, { useState } from 'react';
import {
  PlusOutlined,
  MinusOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import chorma from 'chroma-js';
import type { ReactShape } from '@antv/x6-react-shape';
import cls from 'classnames';

import { mapColorToHex, mapTypeToColor } from '../../utils';
import type { NodeData } from '../../types';

import './style.less';
import { useMindflowService } from '../../store/useMindflowContext';

interface BaseNodeProps {
  node?: ReactShape;
}

const MindNode: FC<BaseNodeProps> = ({ node }) => {
  const data = node.getData<NodeData>();
  const [isHovered, setHovered] = useState(false);

  const { toggleNodeCollapsed } = useMindflowService();

  const { type, collapsed, leaf = true, title, description } = data;

  const baseColor = chorma(mapColorToHex(mapTypeToColor(type)));

  const [unfold, setUnfold] = useState(false);

  const cantFold = !description;

  return (
    <div
      className="mind-node-container"
      style={{
        background: baseColor.alpha(0.1).hex(),
        borderColor: baseColor.alpha(0.1).hex(),
        borderLeftColor: baseColor.hex(),
      }}
    >
      <div className="mind-node-header">
        {cantFold ? null : (
          <span
            className="mind-node-arrow"
            onClick={() => {
              setUnfold(!unfold);
            }}
          >
            {unfold ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </span>
        )}

        <div
          className={cls(
            'mind-node-title',
            unfold ? 'mind-node-title-expand' : '',
          )}
        >
          {title}
        </div>
      </div>
      {unfold ? (
        <div>
          <div className="mind-node-desc">{description}</div>
        </div>
      ) : null}

      {leaf ? null : (
        <div
          className="mind-node-collapse"
          style={{
            borderColor: baseColor.hex(),
            background: isHovered ? baseColor.hex() : 'white',
          }}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onClick={() => {
            toggleNodeCollapsed(node.id);
          }}
        >
          <div
            className="mind-node-collapse-icon"
            style={{ color: isHovered ? '#fff' : baseColor.hex() }}
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            {collapsed ? <PlusOutlined /> : <MinusOutlined />}
          </div>
        </div>
      )}
    </div>
  );
};

export default MindNode;
