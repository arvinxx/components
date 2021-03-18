import type { BaseEdge, MindflowData } from '@arvinxu/mindflow';
import {
  getUncollapsedNode,
  getUncollapsedEdge,
  getUncollaspedData,
  preprocessData,
} from './dataMap';

describe('getUncollapsedNode', () => {
  const data: MindflowData = {
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
  it('多个节点', () => {
    const data2: MindflowData = {
      nodes: [
        {
          id: '1',
        },
        {
          id: '2',
        },
        {
          id: '3',
        },
        {
          id: '4',
        },
        {
          id: '5',
        },
      ],
      edges: [
        { source: '1', target: '2' },
        { source: '1', target: '3' },
        { source: '3', target: '4' },
        { source: '3', target: '5' },
      ],
    };
    const nodes = getUncollapsedNode(data2, ['1']);
    expect(nodes).toEqual([
      {
        id: '1',
      },
    ]);
  });
});

describe('getUncollapsedEdge', () => {
  it('返回正常', () => {
    const edges: BaseEdge<any>[] = [
      {
        source: 'node1',
        target: 'node2',
      },
      {
        source: 'node1',
        target: 'node3',
      },
    ];

    const nodes = getUncollapsedEdge(edges, ['node1']);
    expect(nodes).toEqual([]);
  });
  it('多条边', () => {
    const edges: BaseEdge<any>[] = [
      { source: '1', target: '2' },
      { source: '1', target: '3' },
      { source: '3', target: '4' },
      { source: '3', target: '5' },
    ];

    const enableEdgeResult = getUncollapsedEdge(edges, ['1']);
    expect(enableEdgeResult).toEqual([]);

    const enableEdgeResult2 = getUncollapsedEdge(edges, ['3']);
    expect(enableEdgeResult2).toEqual([
      { source: '1', target: '2' },
      { source: '1', target: '3' },
    ]);
  });
  it('多个折叠条边', () => {
    const edges: BaseEdge<any>[] = [
      { source: '1', target: '2' },
      { source: '1', target: '3' },
      { source: '3', target: '4' },
      { source: '3', target: '5' },
      { source: '2', target: '6' },
      { source: '2', target: '7' },
    ];

    const enableEdgeResult = getUncollapsedEdge(edges, ['2', '3']);
    expect(enableEdgeResult).toEqual([
      { source: '1', target: '2' },
      { source: '1', target: '3' },
    ]);
  });
  it('折叠一个节点', () => {
    const edges = [
      {
        source: 'node1',
        target: 'node2',
      },
      {
        source: 'node1',
        target: 'node3',
      },
      {
        source: 'node1',
        target: 'node4',
      },
      {
        source: 'node4',
        target: 'node5',
      },
      {
        source: 'node5',
        target: 'node6',
      },
      {
        source: 'node6',
        target: 'node7',
      },
      {
        source: 'node7',
        target: 'node8',
      },
    ];

    const enableEdge = getUncollapsedEdge(edges, ['node1']);
    expect(enableEdge).toEqual([]);
  });
});

describe('getUncollapsedData', () => {
  const data = {
    nodes: [
      {
        id: 'node1',
      },
      {
        id: 'node2',
      },
      {
        id: 'node3',
      },
      {
        id: 'node4',
      },
      {
        id: 'node5',
      },
      {
        id: 'node6',
      },
      {
        id: 'node7',
      },
      {
        id: 'node8',
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
      {
        source: 'node1',
        target: 'node4',
      },
      {
        source: 'node4',
        target: 'node5',
      },
      {
        source: 'node5',
        target: 'node6',
      },
      {
        source: 'node6',
        target: 'node7',
      },
      {
        source: 'node7',
        target: 'node8',
      },
    ],
  };

  it('折叠 node1', () => {
    const result = getUncollaspedData(data, ['node1']);
    expect(result).toEqual({
      edges: [],
      nodes: [
        {
          id: 'node1',
        },
      ],
    });
  });

  it('折叠 node6', () => {
    const result = getUncollaspedData(data, ['node6']);

    expect(result).toEqual({
      edges: [
        {
          source: 'node1',
          target: 'node2',
        },
        {
          source: 'node1',
          target: 'node3',
        },
        {
          source: 'node1',
          target: 'node4',
        },
        {
          source: 'node4',
          target: 'node5',
        },
        {
          source: 'node5',
          target: 'node6',
        },
      ],
      nodes: [
        {
          id: 'node1',
        },
        {
          id: 'node2',
        },
        {
          id: 'node3',
        },
        {
          id: 'node4',
        },
        {
          id: 'node5',
        },
        {
          id: 'node6',
        },
      ],
    });
  });
});

describe('preprocessData', () => {
  const data = {
    nodes: [
      {
        id: 'node1',
      },
      {
        id: 'node2',
      },
      {
        id: 'node3',
      },
      {
        id: 'node4',
      },
      {
        id: 'node5',
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
      {
        source: 'node1',
        target: 'node4',
      },
      {
        source: 'node4',
        target: 'node5',
      },
    ],
  };

  it('折叠 node4', () => {
    const result = preprocessData(data, ['node4']);
    expect(result).toEqual({
      edges: [
        {
          source: 'node1',
          target: 'node2',
        },
        {
          source: 'node1',
          target: 'node3',
        },
        {
          source: 'node1',
          target: 'node4',
        },
      ],
      nodes: [
        {
          component: 'mind-node',
          data: {
            collapsed: false,
            leaf: false,
          },
          height: 40,
          id: 'node1',
          shape: 'react-shape',
          width: 220,
        },
        {
          component: 'mind-node',
          data: {
            collapsed: false,
            leaf: true,
          },
          height: 40,
          id: 'node2',
          shape: 'react-shape',
          width: 220,
        },
        {
          component: 'mind-node',
          data: {
            collapsed: false,
            leaf: true,
          },
          height: 40,
          id: 'node3',
          shape: 'react-shape',
          width: 220,
        },
        {
          component: 'mind-node',
          data: {
            collapsed: true,
            leaf: false,
          },
          height: 40,
          id: 'node4',
          shape: 'react-shape',
          width: 220,
        },
      ],
    });
  });
});
