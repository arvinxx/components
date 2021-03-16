import { useEffect, useRef, useState } from 'react';
import { Graph } from '@antv/x6';
import { graphOpts } from '../definition/graphOpts';
import '../definition/register';
import { layout, preprocessData } from '../utils';

export const useGraph = (data) => {
  const container = useRef();
  const minimapContainer = useRef();
  const [graph, setGraph] = useState<Graph>(null);

  useEffect(() => {
    if (!container.current) return;

    if (!graph) {
      // 初始化画布
      setGraph(
        new Graph(graphOpts(container.current, minimapContainer.current)),
      );
    }
  }, [container, graph]);

  // 更新数据
  useEffect(() => {
    if (!graph) return;

    graph.fromJSON(preprocessData(data));
    layout('LR', graph);
  }, [graph, data]);

  return {
    container,
    graph,
    minimapContainer,
  };
};
