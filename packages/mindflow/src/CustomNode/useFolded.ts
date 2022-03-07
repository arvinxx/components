import { useUnfoldedList } from '../store/globalStore';
import { useMemo } from 'react';
import { NodeMindData } from '../types';

/**
 * 判断一个节点是否展开
 * @param id
 * @param data
 */
export const useFolded = (id: string, data: NodeMindData) => {
  const { list, toggleItem: toggleNodeUnfold } = useUnfoldedList();

  const { description, references = [] } = data;

  const isUnFolded = useMemo(() => list.includes(id), [list]);

  return {
    isUnFolded,
    /**
     * 判断是否可以折叠：
     * 有 description 或参考的长度大于0
     */
    cantFold: description || references?.length > 0,
    toggleNodeUnfold,
  };
};
