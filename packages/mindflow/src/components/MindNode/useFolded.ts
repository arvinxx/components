import { useEffect } from 'react';
import { useMindflowService } from '../../store/useMindflowContext';
import type { ReactShape } from '@antv/x6-react-shape';
import type { NodeData } from '../../types';

export const useFolded = (node: ReactShape) => {
  const { isNodeUnfolded, toggleNodeUnfold } = useMindflowService();
  const unfolded = isNodeUnfolded(node.id);
  const data = node.getData<NodeData>();
  const { description, references = [] } = data;

  const cantFold = !description && references.length === 0;

  useEffect(() => {
    // 展开的节点在前面显示

    if (unfolded) {
      node.setZIndex(100);
    } else {
      node.removeZIndex();
    }
  }, [unfolded, node]);

  return { unfolded, cantFold, toggleNodeUnfold };
};
