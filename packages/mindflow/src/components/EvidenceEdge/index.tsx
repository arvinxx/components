import type { FC } from 'react';
import { Popover, Tooltip } from 'antd';
import { useRef, useState } from 'react';

import Reference from './Reference';

import type { BaseEdge } from '../../types';

import './style.less';

interface EvidenceEdgeProps extends BaseEdge {}

const EvidenceEdge: FC<EvidenceEdgeProps> = ({ data }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  const isEmpty = !data || data.references.length === 0;

  return (
    <div className="mind-edge-container">
      {isEmpty ? (
        <Tooltip title={'缺少推理依据'}>
          <div className="mind-edge-content mind-edge-empty" />
        </Tooltip>
      ) : (
        <Popover
          id={'mind-edge-panel'}
          visible={visible}
          getTooltipContainer={ref.current}
          title={'📚 佐证资料'}
          placement={'top'}
          content={
            <Reference references={data.references} setVisible={setVisible} />
          }
        >
          <Tooltip title={`${visible ? '关闭' : '打开'}资料面板`}>
            <div
              className="mind-edge-content"
              onClick={() => setVisible(!visible)}
            />
          </Tooltip>
        </Popover>
      )}
    </div>
  );
};

export default EvidenceEdge;
