import { unionBy } from 'lodash';

import type {
  BaseEdge,
  BaseNode,
  GraphData,
  MindflowData,
  NodeData,
} from '../types';

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
