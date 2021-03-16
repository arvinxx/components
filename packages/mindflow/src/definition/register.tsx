import React from 'react';
import { Graph } from '@antv/x6';
import { MindNode } from './shapes';

import '@antv/x6-react-shape';
import './defaultConfig';

Graph.registerReactComponent('mind-node', <MindNode />);
