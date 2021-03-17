import { useEffect } from 'react';
import { useMindflowService } from '../../store/useMindflowContext';
import type { ReactShape } from '@antv/x6-react-shape';
import { NodeData } from '@arvinxu/mindflow';

export const useFolded = (node: ReactShape) => {
  const { isNodeUnfolded, toggleNodeUnfold } = useMindflowService();
  const unfolded = isNodeUnfolded(node.id);
  const data = node.getData<NodeData>();
  const { description, references = [] } = data;

  const cantFold = !description && references.length === 0;

  useEffect(() => {
    // 展开的节点在前面显示
    node.setZIndex(unfolded ? 1000 : 0);
  }, [unfolded]);

  return { unfolded, cantFold, toggleNodeUnfold };
};
