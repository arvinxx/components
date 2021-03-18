import type { FC } from 'react';
import type { EdgeReference } from '../../types';

import './Reference.less';
import { Button, Divider, Tag } from 'antd';

interface EvidencePanelProps {
  references: EdgeReference[];
  setVisible: (visible: boolean) => void;
}
const EvidencePanel: FC<EvidencePanelProps> = ({ references, setVisible }) => {
  const mapTypeToColor = (type: EdgeReference['type']) => {
    switch (type) {
      case 'ground':
        return 'green';
      case 'warrant':
        return 'blue';

      case 'backing':
        return 'yellow';
      case 'rebuttal':
        return 'purple';
      default:
        return 'gray';
    }
  };
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

  return (
    <div className="mind-edge-references">
      {references.map((ref) => {
        return (
          <a
            key={ref.id}
            href={ref.url}
            target={'_blank'}
            className="mind-edge-references-item"
          >
            <div>
              <Tag
                className="mind-edge-references-tag"
                color={mapTypeToColor(ref.type)}
              >
                {mapTypeToText(ref.type)}
              </Tag>
            </div>
            <div className="mind-edge-references-text">{ref.title}</div>
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
