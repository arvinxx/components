import React from 'react';
import Mindflow, { GraphData, MindflowData } from '@arvinxu/mindflow';

const data: GraphData<MindflowData> = {
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识

      data: {
        text: 'hello',
      },
    },
    {
      id: 'node2', // String，节点的唯一标识
      data: {
        text: 'world',
      },
    },
  ],

  edges: [
    {
      source: 'node1',
      target: 'node2',
    },
  ],
};
const Simple = () => {
  return (
    <div>
      <Mindflow data={data} />
    </div>
  );
};

export default Simple;
