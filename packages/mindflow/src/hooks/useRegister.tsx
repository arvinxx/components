import '@antv/x6-react-shape';
import React from 'react';
import { Graph } from '@antv/x6';
import { MindNode } from '../definition/shapes';
import '../definition/defaultConfig';
import { useEffect } from 'react';

export const useGraphRegister = () => {
  useEffect(() => {
    // 注册返回 React 组件的函数
    Graph.registerReactComponent('mind-node', <MindNode />);
    return () => {
      Graph.unregisterReactComponent('mind-node');
    };
  }, []);
};
