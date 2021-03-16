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
  panning: true,
  mousewheel: true,
  scroller: true,
  minimap: minimapOpts(minimapCtn),
});
