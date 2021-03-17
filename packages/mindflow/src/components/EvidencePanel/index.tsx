import type { FC } from 'react';
import { Popover } from 'antd';
import cls from 'classnames';

import type { Edge } from '@antv/x6/lib/model/edge';

import type { MindflowEdge } from '../../types';

import './style.less';

interface EvidencePanelProps {
  edge: Edge;
  label: Edge.Label;
}

const EvidencePanel: FC<EvidencePanelProps> = ({ edge }) => {
  const data = edge.getData<MindflowEdge>();

  const isEmpty = !data || data.references.length === 0;

  console.log(data);
  return (
    <div className="mind-edge-container">
      <Popover content={'123'}>
        <div
          className={cls('mind-edge-content', isEmpty ? 'mind-edge-empty' : '')}
        />
      </Popover>
    </div>
  );
};

export default EvidencePanel;
