/* istanbul ignore file */
import { MinimalNode } from './shapes';
import type { MiniMapManager } from '@antv/x6/lib/graph/minimap';

export const minimapOpts = (container): Partial<MiniMapManager.Options> => ({
  container,
  enabled: true,
  maxScale: 1,
  scalable: false,
  width: 120,
  height: 100,
  graphOptions: {
    async: true,
    // 用指定的 View 替换节点默认的 View
    getCellView(cell) {
      if (cell.isNode()) {
        return MinimalNode;
      }
    },
    // 在小地图中不渲染边
    createCellView(cell) {
      if (cell.isEdge()) {
        return null;
      }
    },
  },
});
