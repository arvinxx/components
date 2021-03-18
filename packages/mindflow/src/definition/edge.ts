/* istanbul ignore file */
import { Markup, Shape } from '@antv/x6';
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

  defaultLabel: {
    markup: Markup.getForeignObjectMarkup(),
    attrs: {
      fo: {
        width: 30,
        height: 30,
        x: -15,
        y: -15,
      },
    },
  },
  label: {
    position: 0.65,
  },
});
