import { unionBy } from 'lodash';

import type {
  BaseEdge,
  BaseNode,
  MindflowData,
  NodeData,
  PreMindflowData,
} from '../types';
import { defaultNode } from '../definition/node';

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
  data: PreMindflowData,
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
  data: PreMindflowData,
  collapseList: string[],
): PreMindflowData => {
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
  data: PreMindflowData,
  collapseList: string[],
): MindflowData => {
  const displayData = getUncollaspedData(data, collapseList);

  return {
    edges: displayData.edges.map((e) => {
      return {
        ...e,
        source: { cell: e.source, port: 'out' },
        target: { cell: e.target, port: 'in' },
        zIndex: 0,
      };
    }),
    nodes: displayData.nodes.map((node) => {
      const { id } = node;

      return {
        ...defaultNode(node),
        data: {
          ...node.data,
          leaf: data.edges.findIndex((item) => item.source === id) < 0,
          collapsed: collapseList.includes(node.id),
        },
      };
    }),
  };
};
