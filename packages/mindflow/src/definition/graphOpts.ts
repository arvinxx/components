import type { Options } from '@antv/x6/lib/graph/options';
import { minimapOpts } from './minimapOpts';

/**
 * 生成图的配置项
 * @param container
 * @param minimapCtn
 */
export const graphOpts = (container, minimapCtn): Partial<Options.Manual> => ({
  container,
  background: {
    color: '#fafafa',
  },
  interacting: {
    nodeMovable: false,
  },
  mousewheel: true,
  scroller: {
    enabled: true,
    pannable: true,
    autoResize: true,
  },
  minimap: minimapOpts(minimapCtn),
});
