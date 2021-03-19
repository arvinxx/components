/* istanbul ignore file */
import { Markup } from '@antv/x6';
import type { BaseNode } from '../types';

/**
 * 默认的节点类型定义
 * @param node
 */
export const defaultNode = <T>(node: BaseNode<T>) => {
  return {
    width: 220,
    height: 40,
    shape: 'react-shape',
    component: 'mind-node',
    portMarkup: [Markup.getForeignObjectMarkup()],

    ports: {
      items: [
        { id: 'in', group: 'in' },
        { id: 'out', group: 'out' },
        { id: 'handle', group: 'handle' },
      ],
      groups: {
        in: {
          position: { name: 'left' },
          attrs: {
            fo: {
              width: 12,
              height: 12,
              x: -6,
              y: -6,
              magnet: 'true',
            },
          },
          zIndex: 1,
        },
        out: {
          position: { name: 'right' },
          attrs: {
            fo: {
              width: 18,
              height: 18,
              x: -9,
              y: -9,
              magnet: 'true',
            },
          },
          zIndex: 10,
        },
        handle: {
          position: { name: 'right' },
          attrs: {
            fo: {
              width: 12,
              height: 12,
              x: -6,
              y: -6,
              magnet: 'true',
            },
          },
          zIndex: 1,
        },
      },
    },
    ...node,
  };
};
