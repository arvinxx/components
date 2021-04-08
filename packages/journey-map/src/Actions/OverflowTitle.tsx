import type { FC } from 'react';
import React, { useRef } from 'react';
import { Tooltip } from 'antd';
import { useOverflow } from 'use-overflow';

interface OverflowTitleProps {
  title: string;
}
const OverflowTitle: FC<OverflowTitleProps> = ({ title }) => {
  const textRef = useRef(null);
  const { refYOverflowing } = useOverflow(textRef);
  return (
    <div
      ref={textRef}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }}
    >
      {refYOverflowing ? (
        <Tooltip title={title}>{title}</Tooltip>
      ) : (
        <>{title}</>
      )}
    </div>
  );
};

export default OverflowTitle;
