/* istanbul ignore file */

import { G2 } from '@ant-design/charts';

export const registerShape = (theme: string) => {
  G2.registerShape('polygon', 'boundary-polygon', {
    draw: function draw(cfg, container) {
      const group = container.addGroup();
      const attrs = {
        stroke: theme === 'light' ? '#fff' : '#000',
        lineWidth: 1,
        fill: cfg.color,
        path: [],
      };
      const { points } = cfg;

      const path = [
        // @ts-ignore
        ['M', points?.[0].x, points?.[0].y],
        // @ts-ignore
        ['L', points?.[1].x, points?.[1].y],
        // @ts-ignore
        ['L', points?.[2].x, points?.[2].y],
        // @ts-ignore
        ['L', points?.[3].x, points?.[3].y],
        ['Z'],
      ];
      // @ts-ignore
      attrs.path = this.parsePath(path);

      group.addShape('path', { attrs });

      return group;
    },
  });
};
