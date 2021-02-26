import type { FC } from 'react';
import React from 'react';
import type { ReactShape } from '@antv/x6-react-shape';
import type { MindflowData } from '../types';

import './style.less';

interface BaseNodeProps {
  node?: ReactShape;
}

export const Shape: FC<BaseNodeProps> = ({ node }) => {
  const data = node.getData<MindflowData>();
  return <div className="mind-node-container">{data.text}</div>;
};
