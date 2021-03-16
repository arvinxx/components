import { Shape } from '@antv/x6';

Shape.Edge.config({
  attrs: {
    line: {
      stroke: '#d9d9d9',
      strokeWidth: 1,
      targetMarker: {
        tagName: 'path',
        d: 'Z',
      },
    },
  },
});
