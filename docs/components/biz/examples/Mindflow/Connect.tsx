import React from 'react';
import Mindflow, { GraphData, MindflowData } from '@arvinxu/mindflow';

const data: GraphData<MindflowData> = {
  nodes: [
    {
      id: 'node1',
      data: {
        text: '这是一个 问题 节点',
        type: 'question',
      },
    },
    {
      id: 'node2',
      data: {
        text: '这是一个 思路 节点',
        type: 'idea',
      },
    },
    {
      id: 'node3',
      data: {
        text: '这是一个未定节点',
      },
    },
    {
      id: 'node4',
      data: {
        text:
          '这是一个超长文本节点: 永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修稧（禊）事也。',
        type: 'action',
      },
    },
  ],

  edges: [
    {
      source: 'node1',
      target: 'node2',
    },
    {
      source: 'node1',
      target: 'node3',
    },
  ],
};
const Connect = () => {
  return <Mindflow data={data} />;
};

export default Connect;
