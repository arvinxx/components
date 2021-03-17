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
          '可折叠的节点: 永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修稧（禊）事也。',
        description:
          '一切白的东西和你相比都成了黑墨水而自惭形秽，一切无知的鸟兽因为不能说出你的名字而绝望万分，一切路口的警察亮起绿灯让你顺利通行，一切正常的指南针像我标示你存在的方位。',
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
const Basic = () => {
  return (
    <div>
      <Mindflow data={data} height={600} />
    </div>
  );
};

export default Basic;
