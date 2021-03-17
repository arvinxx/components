import { Shape } from '@antv/x6';
import './connector';

Shape.Edge.config({
  connector: 'curve',
  attrs: {
    line: {
      stroke: '#d9d9d9',
      strokeWidth: 1,
      targetMarker: {
        tagName: 'path',
        d: 'M0 0 Z',
      },
    },
  },
});
