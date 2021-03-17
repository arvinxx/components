import type { FC } from 'react';
import React, { useState } from 'react';
import {
  PlusOutlined,
  MinusOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Divider } from 'antd';

import chorma from 'chroma-js';
import type { ReactShape } from '@antv/x6-react-shape';
import cls from 'classnames';

import { mapColorToHex, mapTypeToColor, rgba2hex } from '../../utils';
import type { NodeData } from '../../types';
import { useMindflowService } from '../../store/useMindflowContext';

import './style.less';

interface BaseNodeProps {
  node?: ReactShape;
}

const MindNode: FC<BaseNodeProps> = ({ node }) => {
  const data = node.getData<NodeData>();
  const [isHovered, setHovered] = useState(false);

  const { toggleNodeCollapsed } = useMindflowService();

  const {
    type,
    collapsed,
    leaf = true,
    title,
    description,
    references = [],
  } = data;

  const baseColor = chorma(mapColorToHex(mapTypeToColor(type)));

  const [unfolded, setUnfold] = useState(false);

  const cantFold = !description && references.length === 0;

  const backgroundColor = rgba2hex(baseColor.alpha(0.1).rgba());

  return (
    <div
      className="mind-node-container"
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
              setUnfold(!unfolded);
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
        <EditOutlined />
      </div>
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
            {collapsed ? (
              <PlusOutlined
                onMouseEnter={() => {
                  setHovered(true);
                }}
              />
            ) : (
              <MinusOutlined
                onMouseEnter={() => {
                  setHovered(true);
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MindNode;
