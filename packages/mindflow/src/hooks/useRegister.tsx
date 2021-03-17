import '@antv/x6-react-shape';
import React from 'react';
import { Graph } from '@antv/x6';
import { useEffect } from 'react';
import { MindNode } from '../components';

declare global {
  interface Window {
    __IS_REGISTERED_MIND_NODE__: boolean;
  }
}

export const useGraphRegister = () => {
  useEffect(() => {
    if (!window.__IS_REGISTERED_MIND_NODE__) {
      // 注册返回 React 组件的函数
      Graph.registerReactComponent('mind-node', <MindNode />);
      window.__IS_REGISTERED_MIND_NODE__ = true;
    }
    return () => {
      Graph.unregisterReactComponent('mind-node');
      window.__IS_REGISTERED_MIND_NODE__ = false;
    };
  }, []);
};
