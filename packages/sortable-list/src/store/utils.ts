import type { SortableItemList } from '../types';

export const getIndexOfActiveItem = <
  T extends SortableItemList = SortableItemList,
>(
  list: T,
  id?: string,
) => {
  return id ? list.findIndex((i) => i.id === id) : -1;
};
