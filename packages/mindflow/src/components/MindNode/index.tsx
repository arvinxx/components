import type { FC } from 'react';
import React, { memo, useRef } from 'react';
import {
  CaretUpOutlined,
  CaretDownOutlined,
  EditOutlined,
  AimOutlined,
} from '@ant-design/icons';
import { Divider, Tooltip } from 'antd';
import type { ReactShape } from '@antv/x6-react-shape';
import cls from 'classnames';
import { useOverflow } from 'use-overflow';

import { getColorByType, rgba2hex } from '../../utils';
import type { NodeData } from '../../types';
import { useFolded } from './useFolded';

import './style.less';

interface BaseNodeProps {
  node?: ReactShape;
}

const MindNode: FC<BaseNodeProps> = memo(({ node }) => {
  const ref = useRef();
  const { unfolded, toggleNodeUnfold, cantFold } = useFolded(node);

  const data = node.getData<NodeData>();

  const { type, title, description, references = [] } = data;

  const baseColor = getColorByType(type);

  const backgroundColor = rgba2hex(baseColor.alpha(0.1).rgba());

  const textRef = useRef(null);
  const { refXOverflowing } = useOverflow(textRef);

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
          ref={textRef}
          className={cls(
            'mind-node-title',
            unfolded ? 'mind-node-title-expand' : '',
          )}
        >
          {refXOverflowing ? (
            <Tooltip placement={'topLeft'} title={title}>
              {title}
            </Tooltip>
          ) : (
            title
          )}
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
                return !ref.url ? (
                  <span key={ref.id} className="mind-node-references-item">
                    <div className="mind-node-references-dot" /> {ref.title}
                  </span>
                ) : (
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
    </div>
  );
});

export default MindNode;
