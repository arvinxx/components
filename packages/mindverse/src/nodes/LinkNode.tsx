import type { FC } from 'react';
import React, { memo } from 'react';
import { NodeComponentProps } from 'react-flow-renderer';

// import './LinkNode.less';

interface LinkNodeData {
  url?: string;
}

const LinkNode: FC<NodeComponentProps<LinkNodeData>> = memo(({ data }) => {
  return <div>{data.url}</div>;
});

export default LinkNode;
