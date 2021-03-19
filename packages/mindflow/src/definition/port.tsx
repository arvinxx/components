/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import type { Hook } from '@antv/x6/es/graph/hook';
import { InPort, OutPort } from '../components';
import type { NodeData } from '../types';
import { getColorByType } from '../utils';

export const port = (args: Hook.OnPortRenderedArgs) => {
  const { selectors, node, port } = args;

  const container = selectors && selectors.foContent;

  if (!container) return;

  const data = node.getData<NodeData>();
  const { type, leaf = true, collapsed } = data;

  const color = getColorByType(type).hex();

  if (port.id === 'in') {
    ReactDOM.render(<InPort color={color} />, container as HTMLElement);
  }

  if (port.id === 'out' && !leaf) {
    ReactDOM.render(
      <OutPort color={color} collapsed={collapsed} id={node.id} />,
      container as HTMLElement,
    );
  }
};
