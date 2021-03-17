import { mapColorToHex, getUncollapsedNode } from './dataMap';
import { GraphData, MindflowData } from '@arvinxu/mindflow';

describe('mapColorToHex', () => {
  it('返回红色', () => {
    expect(mapColorToHex('red')).toEqual('#ff4d4f');
    expect(mapColorToHex('pink')).toEqual('#ff4d4f');
  });

  it('返回蓝色', () => {
    expect(mapColorToHex('blue')).toEqual('#69c0ff');
    expect(mapColorToHex('cyan')).toEqual('#69c0ff');
  });
  it('返回绿色', () => {
    expect(mapColorToHex('green')).toEqual('#52c41a');
  });
  it('返回黄色', () => {
    expect(mapColorToHex('yellow')).toEqual('#faad14');
  });
  it('返回青色', () => {
    expect(mapColorToHex('teal')).toEqual('#5cdbd3');
  });
  it('返回紫色', () => {
    expect(mapColorToHex('purple')).toEqual('#b37feb');
  });
});

describe('getUncollapsedNode', () => {
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
  it('返回正常', () => {
    const nodes = getUncollapsedNode(data, ['node1']);
    expect(nodes).toEqual([
      {
        data: {
          title: '这是一个 问题 节点',
          type: 'question',
        },
        id: 'node1',
      },
      {
        data: {
          title: '这是一个 行动点 节点',
          type: 'action',
        },
        id: 'node4',
      },
      {
        data: {
          description:
            ' 永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修稧（禊）事也。',
          title:
            '这是一个可折叠的节点: 永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修稧（禊）事也。',
          type: 'action',
        },
        id: 'node5',
      },
    ]);
  });
});
