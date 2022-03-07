import dagre from 'dagre';
import type { Node, Edge } from 'react-flow-renderer';
import { Position } from 'react-flow-renderer';

import type { BaseNode } from '../types';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

/**
 * 基于 dagre 算法自动布局节点
 * @param nodes
 * @param edges
 * @param direction
 */
export const layoutNodes = (
  nodes: BaseNode[],
  edges: Edge[],
  direction = 'LR',
): Node[] => {
  dagreGraph.setGraph({ rankdir: direction });

  const isHorizontal = direction === 'LR';

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: 300,
      height: 50,
    });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  return nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? Position.Left : Position.Top;
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

    return {
      ...node,
      // we need to pass a slightly different position in order to notify react flow about the change
      // @TODO how can we change the position handling so that we dont need this hack?
      position: {
        x: nodeWithPosition.x,
        // x: nodeWithPosition.x + Math.random() / 1000,
        y: nodeWithPosition.y,
      },
    };
  });
};
