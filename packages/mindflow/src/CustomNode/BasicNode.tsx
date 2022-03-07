import type { FC } from 'react';
import React, { memo, useRef } from 'react';
import { Handle, Position } from 'react-flow-renderer';

import { Divider, Tooltip } from 'antd';
import {
  AimOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  EditOutlined,
} from '@ant-design/icons';
import cls from 'classnames';
import { useOverflow } from 'use-overflow';

import { getColorByType, rgba2hex } from '../utils';
import type { BaseNode, NodeMindData } from '../types';
import { useFolded } from './useFolded';

import UrlNode from './UrlNode';
import ImageNode from './ImageNode';

import './BasicNode.less';

export interface BasicNodeProps extends BaseNode<NodeMindData> {
  isConnectable?: boolean;
}

const BasicNode: FC<BasicNodeProps> = memo(({ data, id }) => {
  const ref = useRef();
  const { isUnFolded, toggleNodeUnfold, cantFold } = useFolded(id, data);

  const { type, title, description, references = [], infoType } = data;

  const baseColor = getColorByType(type);

  const backgroundColor = rgba2hex(baseColor.alpha(0.1).rgba());

  const textRef = useRef(null);
  const { refXOverflowing } = useOverflow(textRef);

  const OverflowTitle: FC = () =>
    refXOverflowing ? (
      <Tooltip placement={'topLeft'} title={title}>
        {title}
      </Tooltip>
    ) : (
      <>{title}</>
    );

  const InfoNode = () => {
    if (type !== 'information') return <OverflowTitle />;

    switch (infoType) {
      case 'image':
        return <ImageNode src={title} />;
      case 'url':
        return <UrlNode link={title} />;
      default:
      case 'text':
        return <OverflowTitle />;
    }
  };

  return (
    <div
      ref={ref}
      className={cls(
        'avx-mindflow-node-container',
        isUnFolded ? 'avx-mindflow-node-shadow' : '',
      )}
      style={{
        borderColor: baseColor.hex(),
        borderLeftColor: baseColor.hex(),
      }}
    >
      <Handle type={'source'} position={Position.Right} id={id} />
      <Handle type={'target'} position={Position.Left} id={id} />
      <div
        className={'avx-mindflow-node-flag'}
        style={{ background: baseColor.hex() }}
      />
      <div className="avx-mindflow-node-header">
        {cantFold ? (
          <span
            className="avx-mindflow-node-arrow"
            onClick={() => {
              toggleNodeUnfold(id);
            }}
          >
            {isUnFolded ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </span>
        ) : null}

        <div
          ref={textRef}
          className={cls(
            'avx-mindflow-node-title',
            isUnFolded ? 'avx-mindflow-node-title-expand' : '',
          )}
        >
          <InfoNode />
        </div>
      </div>
      {isUnFolded ? (
        <div className="avx-mindflow-node-unfolded">
          <div className="avx-mindflow-node-desc">{description}</div>

          {references.length === 0 ? null : (
            <div className="avx-mindflow-node-references">
              <Divider dashed style={{ margin: '4px 0 8px' }} />
              <span>📚 相关资料</span>
              {references.map((ref) => {
                return !ref.url ? (
                  <span
                    key={ref.title}
                    className="avx-mindflow-node-references-item"
                  >
                    <div className="avx-mindflow-node-references-dot" />{' '}
                    {ref.title}
                  </span>
                ) : (
                  <a
                    key={ref.url}
                    href={ref.url}
                    target={'_blank'}
                    className="avx-mindflow-node-references-item"
                    rel="noreferrer"
                  >
                    <div className="avx-mindflow-node-references-dot" />{' '}
                    {ref.title}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      ) : null}
      <div
        className="avx-mindflow-node-edit"
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

export default BasicNode;
