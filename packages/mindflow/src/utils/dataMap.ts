import { unionBy } from 'lodash';

import { mindFlowColors } from '../themes/nodeColor';
import type { BaseEdge, GraphData, MindflowData, NodeData } from '../types';
import type { BaseNode } from '../types';

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
    case 'subject':
      return 'blue';
    default:
      return 'grey';
  }
};

/**
 * 获取所有需要被折叠的边
 * @param baseEdges
 * @param id
 * @param result
 */
const filterEdgeById = (
  baseEdges: BaseEdge<any>[],
  id: string,
  result: BaseEdge<any>[],
) => {
  const fromEdges = baseEdges.filter((e) => e.source === id);

  if (fromEdges.length === 0) return;

  fromEdges.forEach((e) => {
    result.push(e);
  });

  fromEdges.forEach((e) => filterEdgeById(baseEdges, e.target, result));

  return unionBy(result, 'target');
};

/**
 * 找到不被折叠的节点
 * @param data
 * @param collapseList
 */
export const getUncollapsedNode = (
  data: MindflowData,
  collapseList: string[],
): BaseNode<NodeData>[] => {
  const targetList = collapseList
    .map((cid) => filterEdgeById(data.edges, cid, []).map((e) => e.target))
    .flat();

  return data.nodes.filter((n) => !targetList.includes(n.id));
};

export const getUncollapsedEdge = <T = any>(
  edges: BaseEdge<T>[],
  collapseList: string[],
): BaseEdge<T>[] => {
  const targetList = collapseList
    .map((cid) => filterEdgeById(edges, cid, []).map((e) => e.target))
    .flat();

  return edges
    .filter((e) => !targetList.includes(e.target))
    .filter((e) => !collapseList.includes(e.source));
};

export const getUncollaspedData = (
  data: MindflowData,
  collapseList: string[],
): MindflowData => {
  return {
    edges: getUncollapsedEdge(data.edges, collapseList),
    nodes: getUncollapsedNode(data, collapseList),
  };
};

/**
 * 对数据进行预处理
 * @param data
 * @param collapseList
 */
export const preprocessData = (
  data: MindflowData,
  collapseList: string[],
): GraphData<NodeData> => {
  const displayData = getUncollaspedData(data, collapseList);
  return {
    edges: displayData.edges,
    nodes: displayData.nodes.map((node) => {
      const { id } = node;

      const isLeaf = data.edges.findIndex((item) => item.source === id) < 0;

      return {
        width: 220,
        height: 40,
        shape: 'react-shape',
        component: 'mind-node',
        ...node,
        data: {
          ...node.data,
          leaf: isLeaf,
          collapsed: collapseList.includes(node.id),
        },
      };
    }),
  };
};
