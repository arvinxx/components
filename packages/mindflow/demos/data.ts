import type { MindflowData } from '@arvinxu/mindflow';

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
            title: '在 a 场景下会遇到这个问题',
            url: 'https://www.yuque.com/arvinxx/tu0agc/f4991c0b743f068e3c5595adbe530a5e',
          },
          {
            title: '在 b 场景下比较可用',
            url: 'https://www.yuque.com/arvinxx/tu0agc/15ddd39fd92b1a314f6981c5a4d3b321',
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
      id: 'edge-1',
      source: 'node1',
      target: 'node2',
      data: {
        references: [
          {
            id: 'ref1',
            title: '佐证资料 1',
            url: 'https://www.yuque.com/arvinxx/tu0agc/b9cf8942370501a4b5c1c751c38c7860',
            type: 'rebuttal',
          },
          {
            id: 'ref2',
            title: '佐证资料 2',
            url: 'https://www.yuque.com/arvinxx/tu0agc/15ddd39fd92b1a314f6981c5a4d3b321',
            type: 'ground',
          },
        ],
      },
    },
    {
      id: 'edge-2',
      source: 'node1',
      target: 'node3',
    },
    {
      id: 'edge-3',
      source: 'node5',
      target: 'node6',
    },
    {
      id: 'edge-4',
      source: 'node5',
      target: 'node7',
    },
  ],
};

export const thinking: MindflowData = {
  nodes: [
    {
      id: '1',
      data: {
        type: 'question',
        title: '如何设计 Mindflow',
      },
    },
    {
      id: '2',
      data: {
        type: 'information',
        title:
          'https://www.yuque.com/arvinxx/tu0agc/583fa27a-05f6-410f-84a8-304500513d84',
        infoType: 'url',
      },
    },
    {
      id: '3',
      data: {
        type: 'information',
        title:
          'https://gw.alipayobjects.com/zos/antfincdn/w%26UFkCsvSt/7d30e63e-607c-4889-810e-664d8c8ccb08.png',
        infoType: 'image',
      },
    },
    {
      id: '4',
      data: {
        type: 'idea',
        title: '信息节点的展开与折叠',
        description: '发散与收敛交互',
      },
    },
    {
      id: '5',
      data: {
        type: 'idea',
        title: '在边上展示依据',
      },
    },
  ],
  edges: [
    {
      id: 'edge-1',
      source: '1',
      target: '2',
    },
    {
      id: 'edge-2',
      source: '1',
      target: '3',
    },
    {
      id: 'edge-3',
      source: '2',
      target: '5',
    },
    {
      id: 'edge-4',
      source: '3',
      target: '4',
    },
  ],
};

export const museum: MindflowData = {
  nodes: [
    {
      id: 'node1',
      data: {
        title: '如何解决墙面腐蚀很严重的问题?',
        type: 'question',
        description:
          '博物馆的东边外墙面上有非常严重的腐蚀，需要经常涂刷新的油漆。',
        references: [
          {
            title: '清洁工小王于2021年3月21日刷了新油漆',
          },
          {
            title: '清洁工小李于2021年1月12日刷了新油漆(链接可点击)',
            url: 'https://www.yuque.com/go/doc/33140357',
          },
        ],
      },
    },
    {
      id: 'node2',
      data: {
        title: '刷新的油漆',
        type: 'action',
      },
    },
    {
      id: 'node3',
      data: {
        title: '换用低腐蚀度的清洁剂',
        type: 'action',
      },
    },
    {
      id: 'node4',
      data: {
        title: '为什么要用高腐蚀度的清洁剂？',
        type: 'question',
      },
    },
    {
      id: 'node5',
      data: {
        title: '为什么东边的墙上有很多鸟粪？',
        type: 'question',
      },
    },
    {
      id: 'node6',
      data: {
        title: '为什么墙上有很多蜘蛛？',
        type: 'question',
      },
    },
    {
      id: 'node7',
      data: {
        title: '为什么只有这边的墙上有很多小虫子，其他的墙没有呢？',
        type: 'question',
      },
    },
    {
      id: 'node8',
      data: {
        title: '半晚时候不让光会从这里透出去就行',
        type: 'idea',
      },
    },
    {
      id: 'node9',
      data: {
        title: '装上厚窗帘',
        type: 'action',
      },
    },
  ],
  edges: [
    { id: 'edge-1', source: 'node1', target: 'node2' },
    {
      id: 'edge-2',
      source: 'node1',
      target: 'node3',
      data: {
        references: [
          {
            id: 'ref3',
            title: '小王在洗墙的时候，用了一种高腐蚀度的清洁剂,导致墙面腐蚀',
            type: 'ground',
          },
          {
            id: 'ref4',
            title: '换用低腐蚀度的清洁剂可能墙面就不腐蚀了',
            type: 'warrant',
          },
          {
            id: 'ref5',
            title: '除非低腐蚀度的清洁剂洗不干净',
            type: 'rebuttal',
          },
          {
            id: 'ref6',
            title: '东边的墙上经常有很多鸟粪,低腐蚀度的清洁剂洗不干净',
            type: 'ground',
          },
        ],
      },
    },
    {
      id: 'edge-3',
      source: 'node1',
      target: 'node4',
      data: {
        references: [
          {
            id: 'ref3',
            title: '小王在洗墙的时候，用了一种高腐蚀度的清洁剂,导致墙面腐蚀',
            type: 'ground',
          },
        ],
      },
    },
    {
      id: 'edge-4',
      source: 'node4',
      target: 'node5',
      data: {
        references: [
          {
            id: 'ref6',
            title: '东边的墙上经常有很多鸟粪',
            type: 'ground',
          },
        ],
      },
    },
    {
      id: 'edge-5',
      source: 'node5',
      target: 'node6',
      data: {
        references: [
          {
            id: 'ref7',
            title: '墙上有很多蜘蛛, 这些鸟以蜘蛛为食，所以经常在墙附近活动',
            type: 'ground',
          },
        ],
      },
    },
    {
      id: 'edge-6',
      source: 'node6',
      target: 'node7',
      data: {
        references: [
          {
            id: 'ref8',
            title: '因为墙上有很多小虫子，而蜘蛛以这些小虫子为食',
            type: 'ground',
          },
        ],
      },
    },
    {
      id: 'edge-7',
      source: 'node7',
      target: 'node8',
      data: {
        references: [
          {
            id: 'ref9',
            title:
              '东面墙上有几扇窗子，半晚时候博物馆里的光会从这里透出去，而这些趋光性很强的虫子就被光吸引过来。',
            type: 'ground',
          },
        ],
      },
    },
    {
      id: 'edge-8',
      source: 'node8',
      target: 'node9',
    },
  ],
};
