import type { StateCreator } from 'zustand/vanilla';
import create from 'zustand';
import produce from 'immer';

type GlobalStore = {
  list: string[];
  toggleItem: (id: string) => void;
};

const toggleList: StateCreator<GlobalStore> = (set) => ({
  list: [],
  toggleItem: (id: string) => {
    set(
      produce((state) => {
        // 没有的情况下新增
        if (!state.list.includes(id)) {
          state.list.push(id);
        }
        // 有的情况下去掉
        else {
          state.list = state.list.filter((l) => l !== id);
        }
      }),
    );
  },
});
/**
 * Mindflow 的全局状态
 */
export const useCollapseList = create<GlobalStore>(toggleList);
export const useUnfoldedList = create<GlobalStore>(toggleList);
