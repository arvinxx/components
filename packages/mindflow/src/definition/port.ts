import type { Hook } from '@antv/x6/es/graph/hook';

export const port = (args: Hook.OnPortRenderedArgs): void => {
  console.log(args);
};
