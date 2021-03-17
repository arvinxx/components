import React from 'react';
import Mindflow, { GraphData, MindflowData } from '@arvinxu/mindflow';

const data: GraphData<MindflowData> = {
  nodes: [
    {
      id: 'node1',
      data: {
        title: '这是一个 问题 节点',
        type: 'question',
      },
    },
    {
      id: 'node2',
      data: {
        title: '这是一个 思路 节点',
        type: 'idea',
      },
    },
    {
      id: 'node3',
      data: {
        title: '这是一个未定节点',
      },
    },
    {
      id: 'node4',
      data: {
        title: '这是一个 行动点 节点',
        type: 'action',
      },
    },
    {
      id: 'node5',
      data: {
        title:
          '这是一个可折叠的节点: 永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修稧（禊）事也。',
        description:
          ' 永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修稧（禊）事也。',
        type: 'action',
      },
    },
  ],
  edges: [],
};
const Basic = () => {
  return (
    <div>
      <Mindflow data={data} height={800} />
    </div>
  );
};

export default Basic;
