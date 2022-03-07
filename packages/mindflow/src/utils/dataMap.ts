import { unionBy } from 'lodash';

import type { BaseNode, MindflowData, NodeData, BaseEdge } from '../types';

/**
 * 获取所有需要被折叠的边
 * @param baseEdges
 * @param id
 * @param result
 */
const filterEdgeById = (
  baseEdges: BaseEdge[],
  id: string,
  result: BaseEdge[],
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
  data,
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

export const getUncollaspedData = (data, collapseList: string[]) => {
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
export const preprocessData = (data, collapseList: string[]): MindflowData => {
  const displayData = getUncollaspedData(data, collapseList);

  return {
    edges: displayData.edges.map((e) => {
      return e;
    }),
    nodes: displayData.nodes.map((node) => {
      const { id } = node;

      return {
        ...node,
        type: 'basic',
        data: {
          ...node.data,
          leaf: data.edges.findIndex((item) => item.source === id) < 0,
          collapsed: collapseList.includes(node.id),
        },
      };
    }),
  };
};
