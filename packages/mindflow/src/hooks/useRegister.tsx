import '@antv/x6-react-shape';
import React from 'react';
import { Graph } from '@antv/x6';
import { Shape } from '../definition';
import { useEffect } from 'react';

export const useGraphRegister = () => {
  useEffect(() => {
    // 注册返回 React 组件的函数
    Graph.registerReactComponent('test-shape', <Shape />);
    return () => {
      Graph.unregisterReactComponent('test-shape');
    };
  }, []);
};
