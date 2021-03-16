import { MinimaNode } from './shapes';

export const minimapOpts = (container) => ({
  container,
  enabled: true,
  maxScale: 1,
  scalable: false,
  graphOptions: {
    async: true,
    // 用指定的 View 替换节点默认的 View
    getCellView(cell) {
      if (cell.isNode()) {
        return MinimaNode;
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
