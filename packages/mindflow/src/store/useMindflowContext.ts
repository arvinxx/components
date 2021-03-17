import { useStore } from 'stook';
import { KEYS } from './key';

import { Graph } from '@antv/x6';
// import { useState } from 'react';
// import { getServiceToken } from '../utils';

/**
 * Mindflow 全局共享状态
 */
export const useMindflowService = () => {
  const [collapseList, setCollapseList] = useStore<string[]>(
    KEYS.collapseList,
    [],
  );

  const [unfoldedList, setUnfoldedList] = useStore<string[]>(
    KEYS.unfoldedList,
    [],
  );

  const [graph, setGraph] = useStore<Graph>(KEYS.graph, null);

  /**
   * 将某个节点插入 id
   * @param id
   */
  const toggleNodeCollapsed = (id: string) => {
    setCollapseList((list) => {
      // 没有的情况下新增
      if (!list.includes(id)) list.push(id);
      // 有的情况下去掉
      else return list.filter((l) => l !== id);
    });
  };
  /**
   * 将某个节点插入 id
   * @param id
   */
  const toggleNodeUnfold = (id: string) => {
    setUnfoldedList((list) => {
      // 没有的情况下新增
      if (!list.includes(id)) list.push(id);
      // 有的情况下去掉
      else return list.filter((l) => l !== id);
    });
  };

  return {
    collapseList,
    toggleNodeCollapsed,
    toggleNodeUnfold,
    isNodeUnfolded: (id: string) =>
      unfoldedList.findIndex((i) => i === id) > -1,
    graph,
    setGraph,
  };
};

// // 这个服务将被注册至全局
// export const MindflowService = getServiceToken(useMindflowService);
