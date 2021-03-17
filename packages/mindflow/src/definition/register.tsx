import React from 'react';
import { Graph } from '@antv/x6';
import { MindNode } from './shapes';

import '@antv/x6-react-shape';
import './defaultConfig';

declare global {
  interface Window {
    __IS_REGISTERED_MIND_NODE__: boolean;
  }
}

if (!window.__IS_REGISTERED_MIND_NODE__) {
  Graph.registerReactComponent('mind-node', <MindNode />);
  window.__IS_REGISTERED_MIND_NODE__ = true;
}
