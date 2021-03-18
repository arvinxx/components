import { MindflowData } from '@arvinxu/mindflow';

export const demo: MindflowData = {
  nodes: [
    {
      id: 'node1',
      data: {
        title: '这是一个 问题 节点',
        type: 'question',
        description: '有关问题的详细描述',
        references: [
          {
            id: 'a 场景',
            title: '在 a 场景下会遇到这个问题',
            url:
              'https://www.yuque.com/arvinxx/tu0agc/f4991c0b743f068e3c5595adbe530a5e',
          },
          {
            id: 'b 场景',
            title: '在 b 场景下比较可用',
            url:
              'https://www.yuque.com/arvinxx/tu0agc/15ddd39fd92b1a314f6981c5a4d3b321',
          },
        ],
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
        title: '可折叠的主题节点: 恋爱的犀牛 孟京辉',
        description:
          '一切白的东西和你相比都成了黑墨水而自惭形秽，一切无知的鸟兽因为不能说出你的名字而绝望万分，一切路口的警察亮起绿灯让你顺利通行，一切正常的指南针像我标示你存在的方位。',
        type: 'subject',
      },
    },
    {
      id: 'node6',
      data: {
        title: '这还是一个未定节点',
      },
    },
    {
      id: 'node7',
      data: {
        title: '行动点',
        type: 'action',
      },
    },
    {
      id: 'node8',
      data: {
        title: '又一个问题节点',
        type: 'question',
      },
    },
  ],
  edges: [
    {
      source: 'node1',
      target: 'node2',
      data: {
        references: [
          {
            id: 'ref1',
            title: '佐证资料 1',
            url:
              'https://www.yuque.com/arvinxx/tu0agc/b9cf8942370501a4b5c1c751c38c7860',
            type: 'rebuttal',
          },
          {
            id: 'ref2',
            title: '佐证资料 2',
            url:
              'https://www.yuque.com/arvinxx/tu0agc/15ddd39fd92b1a314f6981c5a4d3b321',
            type: 'ground',
          },
        ],
      },
    },
    {
      source: 'node1',
      target: 'node3',
    },
    {
      source: 'node5',
      target: 'node6',
    },
    {
      source: 'node5',
      target: 'node7',
    },
  ],
};
