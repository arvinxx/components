import { mindFlowColors } from '../themes/nodeColor';
import type { GraphData, MindflowData, NodeData } from '../types';

/**
 * 从文本色值获得 hex
 * @param color
 */
export const mapColorToHex = (color: string) => {
  switch (color) {
    case 'blue':
    case 'cyan':
      return mindFlowColors.blue;
    case 'teal':
      return mindFlowColors.cyan;
    case 'green':
      return mindFlowColors.green;
    case 'yellow':
      return mindFlowColors.yellow;
    case 'purple':
      return mindFlowColors.purple;
    case 'pink':
    case 'red':
    case 'orange':
      return mindFlowColors.red;

    case 'gray':
      return mindFlowColors.gray;
    default:
      return mindFlowColors.gray;
  }
};

/**
 * 类型
 * @param type
 */
export const mapTypeToColor = (type: string) => {
  switch (type) {
    case 'question':
      return 'red';
    case 'action':
      return 'green';
    case 'idea':
      return 'yellow';
    default:
      return 'grey';
  }
};

/**
 * 对数据进行预处理
 * @param data
 */
export const preprocessData = (
  data: GraphData<MindflowData>,
): GraphData<NodeData> => {
  return {
    ...data,
    nodes: data.nodes.map((node) => {
      const { id } = node;

      const isLeaf = data.edges.findIndex((item) => item.source === id) < 0;

      return {
        ...node,
        width: 180,
        height: 40,
        shape: 'react-shape',
        component: 'mind-node',
        data: {
          ...node.data,
          leaf: isLeaf,
        },
      };
    }),
  };
};
