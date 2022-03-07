import type { Edge } from 'react-flow-renderer';

import { layoutNodes } from './layout';
import type { BaseNode } from '../types';

test('layoutNodes', () => {
  const nodes: BaseNode[] = [
    {
      id: 'node1',
      data: '',
    },
    {
      id: 'node2',
      data: '',
    },
    {
      id: 'node3',
      data: '',
    },
    {
      id: 'node4',
      data: '',
    },
    {
      id: 'node5',
      data: '',
    },
  ];

  const edges: Edge[] = [
    { id: 'e-1', source: 'node1', target: 'node2' },
    { id: 'e-2', source: 'node1', target: 'node3' },
  ];

  const nodesWidthLayout = layoutNodes(nodes, edges);

  expect(nodesWidthLayout).toEqual([
    {
      data: '',
      id: 'node1',
      position: {
        x: 75,
        y: 75,
      },
      sourcePosition: 'right',
      targetPosition: 'left',
    },
    {
      data: '',
      id: 'node2',
      position: {
        x: 275,
        y: 25,
      },
      sourcePosition: 'right',
      targetPosition: 'left',
    },
    {
      data: '',
      id: 'node3',
      position: {
        x: 275,
        y: 125,
      },
      sourcePosition: 'right',
      targetPosition: 'left',
    },
    {
      data: '',
      id: 'node4',
      position: {
        x: 75,
        y: 175,
      },
      sourcePosition: 'right',
      targetPosition: 'left',
    },
    {
      data: '',
      id: 'node5',
      position: {
        x: 75,
        y: 275,
      },
      sourcePosition: 'right',
      targetPosition: 'left',
    },
  ]);
});
