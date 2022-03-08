import create from 'zustand';
import createContext from 'zustand/context';

import { arrayMove } from '@dnd-kit/sortable';
import produce from 'immer';
import initialState from './initialState';
import type { SortableListStore } from '../types';

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

    syncOutsideProps: (props) => {
      set({ onDataChange: props.onDataChange, data: props.data ?? get().data });
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
        }

        state.splice(addIndex, 0, item);
      });

      internalUpdateData(nextData);
    },
    removeItem: (id) => {
      const { data, internalUpdateData } = get();
      const nextData = data.filter((item) => item.id !== id);

      internalUpdateData(nextData);
    },
  }));

const { Provider, useStore, useStoreApi } = createContext<SortableListStore>();

export { Provider, useStore, createStore, useStoreApi };
