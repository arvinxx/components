import type { FC } from 'react';
import React, { useRef } from 'react';
import { Tooltip } from 'antd';
import { useOverflow } from 'use-overflow';

interface OverflowTitleProps {
  title: string;
  direction: 'x' | 'y';
}
const OverflowTitle: FC<OverflowTitleProps> = ({ title, direction = 'x' }) => {
  const textRef = useRef(null);
  const { refYOverflowing, refXOverflowing } = useOverflow(textRef);
  const judged = direction === 'x' ? refXOverflowing : refYOverflowing;

  return (
    <div
      ref={textRef}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }}
    >
      {judged ? <Tooltip title={title}>{title}</Tooltip> : <>{title}</>}
    </div>
  );
};

export default OverflowTitle;
