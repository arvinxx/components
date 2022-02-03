import { useEffect, useReducer } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import produce from 'immer';
import isEqual from 'lodash.isequal';

import type { SortableItem, SortableItemList } from '../types';

interface SortSyncOutSource {
  type: 'syncOutSource';
  state: SortableItem[];
}
interface SortAddItem {
  type: 'addItem';
  item: SortableItem;
  addIndex?: number;
}
interface SortRemoveItem {
  type: 'removeItem';
  id: string;
}
interface SortReorderItem {
  type: 'reorder';
  endIndex: number;
  startIndex: number;
}

type ReducerDispatch =
  | SortRemoveItem
  | SortReorderItem
  | SortAddItem
  | SortSyncOutSource;

export const useSortableList = (
  options: {
    defaultValue?: SortableItemList;
    value?: SortableItemList;
    onChange?: (value: SortableItemList) => void;
  } = {},
) => {
  const sortableReducer = (
    innerState: SortableItemList,
    payload: ReducerDispatch,
  ) => {
    const state = options?.value ?? innerState;

    switch (payload.type) {
      // 移除对象
      case 'syncOutSource':
        if (isEqual(payload.state, innerState)) return innerState;

        return payload.state;
      case 'removeItem':
        return state.filter((item) => item.id !== payload.id);
      // 重新排序
      case 'reorder':
        if (payload.startIndex !== payload.endIndex) {
          return arrayMove(state, payload.startIndex, payload.endIndex);
        }
        return state;
      case 'addItem': {
        if (typeof payload.addIndex !== 'number')
          // 如果没有提供添加位的 index 值,默认添加在最后
          return [...state, payload.item];

        return produce(state, (draft) => {
          draft.splice(payload.addIndex, 0, payload.item);
        });
      }
    }
  };

  const [items, dispatchSortable] = useReducer(
    sortableReducer,
    options?.value ?? (options?.defaultValue || []),
  );

  useEffect(() => {
    if (!options.onChange) return;

    options.onChange(items);
  }, [items]);

  // 同步外部数据
  useEffect(() => {
    if (!options.value) return;

    dispatchSortable({
      type: 'syncOutSource',
      state: options.value,
    });
  }, [options.value]);

  return {
    items,
    dispatchSortable,
  };
};
