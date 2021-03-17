import { useEffect, useRef } from 'react';
import { Graph } from '@antv/x6';

import { graphOpts } from '../definition/graphOpts';
import { layout, preprocessData } from '../utils';
import { useGraphRegister } from './useRegister';
import { useMindflowService } from '../store/useMindflowContext';

export const useGraph = (data) => {
  const container = useRef();
  const minimapContainer = useRef();

  const { collapseList, setGraph, graph } = useMindflowService();

  useGraphRegister();

  useEffect(() => {
    if (!container.current) return;

    if (!graph) {
      // 初始化画布
      setGraph(
        new Graph(graphOpts(container.current, minimapContainer.current)),
      );
    }
    return () => {
      setGraph(null);
    };
  }, [container]);

  // 更新数据
  useEffect(() => {
    if (!graph) return;

    graph.fromJSON(preprocessData(data, collapseList));
    layout('LR', graph);
  }, [graph, data, collapseList]);

  return {
    container,
    minimapContainer,
  };
};
