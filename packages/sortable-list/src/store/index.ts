import { create, StoreApi } from 'zustand';
import { createContext } from 'zustand-utils';

import { arrayMove } from '@dnd-kit/sortable';
import produce from 'immer';
import isEqual from 'lodash.isequal';
import type { SortableListStore } from '../types';
import initialState from './initialState';
const createStore = () =>
  create<SortableListStore>((set, get) => ({
    // 内部值
    ...initialState,
    activateItem: (id) => {
      set({ activeId: id });
    },
    deactivateItem: () => {
      set({ activeId: null });
    },
    // 内部更新 data 方法
    internalUpdateData: (data) => {
      const { onDataChange } = get();
      set({ data });

      if (onDataChange) {
        onDataChange(data);
      }
    },

    syncOnDataChange: (onDataChange) => {
      set({ onDataChange });
    },

    syncOutsideData: (data) => {
      if (isEqual(get().data, data)) return;

      set({ data });
    },

    // 重新排序
    reorder: (startIndex, endIndex) => {
      const { data, internalUpdateData } = get();
      const nextData = produce(data, (state) => {
        if (startIndex !== endIndex) {
          return arrayMove(state, startIndex, endIndex);
        }

        return state;
      });

      internalUpdateData(nextData);
    },
    // 添加元素
    addItem: (item, addIndex) => {
      const { data, internalUpdateData } = get();
      const nextData = produce(data, (state) => {
        if (typeof addIndex !== 'number') {
          // 如果没有提供添加位的 index 值,默认添加在最后
          state.push(item);
        } else {
          state.splice(addIndex, 0, item);
        }
      });

      internalUpdateData(nextData);
    },
    removeItem: (id) => {
      const { data, internalUpdateData } = get();
      const nextData = data.filter((item) => item.id !== id);

      internalUpdateData(nextData);
    },
  }));

const { Provider, useStore, useStoreApi } = createContext<StoreApi<SortableListStore>>();

export { Provider, useStore, createStore, useStoreApi };
