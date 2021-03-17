import ReactDOM from 'react-dom';
import React from 'react';

import { EvidencePanel } from '../components';
import type { Hook } from '@antv/x6/lib/graph/hook';

export const edgeLabel = (args: Hook.OnEdgeLabelRenderedArgs) => {
  const { selectors, edge, label } = args;
  const content = selectors.foContent as HTMLDivElement;
  if (content) {
    ReactDOM.render(<EvidencePanel edge={edge} label={label} />, content);
  }
};
