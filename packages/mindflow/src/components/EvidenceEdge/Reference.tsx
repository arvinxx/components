import type { FC } from 'react';
import React from 'react';
import { Button, Divider, Tag } from 'antd';

import type { EdgeReference } from '../../types';
import { mapReferenceTypeToColor } from '../../utils';

import './Reference.less';

interface EvidencePanelProps {
  references: EdgeReference[];
  setVisible: (visible: boolean) => void;
}

const EvidencePanel: FC<EvidencePanelProps> = ({ references, setVisible }) => {
  const mapTypeToText = (type: EdgeReference['type']) => {
    switch (type) {
      case 'ground':
        return '事实';
      case 'warrant':
        return '推测';

      case 'backing':
        return '支援';
      case 'rebuttal':
        return '反驳';
      default:
        return '未定';
    }
  };

  const Content: FC<{ reference: EdgeReference }> = ({ reference }) => {
    return (
      <>
        <div>
          <Tag
            className="mind-edge-references-tag"
            color={mapReferenceTypeToColor(reference.type)}
          >
            {mapTypeToText(reference.type)}
          </Tag>
        </div>
        <div className="mind-edge-references-text">{reference.title}</div>
      </>
    );
  };

  return (
    <div className="mind-edge-references">
      {references.map((ref) => {
        return !ref.url ? (
          <div className="mind-edge-references-item" key={ref.id}>
            <Content reference={ref} />
          </div>
        ) : (
          <a
            key={ref.id}
            href={ref.url}
            target={'_blank'}
            className="mind-edge-references-item"
          >
            <Content reference={ref} />
          </a>
        );
      })}
      <Divider dashed style={{ margin: '8px 0' }} />
      <div className="mind-edge-references-foot">
        <Button size={'small'} onClick={() => setVisible(false)}>
          关闭
        </Button>
      </div>
    </div>
  );
};

export default EvidencePanel;
