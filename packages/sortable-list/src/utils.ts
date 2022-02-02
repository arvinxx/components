import { SortableItemList } from './types';

export const getIndexOfActiveItem = (list: SortableItemList, id?: string) => {
  return id ? list.findIndex((i) => i.id === id) : -1;
};
