import { useEffect, useRef, useState } from 'react';
import { Graph } from '@antv/x6';
import { useGraphRegister } from './useRegister';
import { layout } from '../utils/layout';

/**
 * 对数据进行预处理
 * @param data
 */
export const preprocessData = (data: any) => {
  return {
    ...data,
    nodes: data.nodes.map((node) => ({
      ...node,
      width: 80,
      height: 40,
      shape: 'react-shape',
      component: 'test-shape',
    })),
  };
};

export const useGraph = (data) => {
  const container = useRef();
  const [graph, setGraph] = useState<Graph>(null);

  useGraphRegister();

  useEffect(() => {
    if (!container.current) return;

    if (!graph) {
      // 初始化画布
      setGraph(
        new Graph({
          container: container.current,
          background: {
            color: '#fafafa',
          },
        }),
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
  };
};
