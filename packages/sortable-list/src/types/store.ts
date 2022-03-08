import type { UniqueIdentifier } from '@dnd-kit/core';

/**
 * 基础项
 */
export interface SortableBaseItem {
  id: UniqueIdentifier;
}

export type SortableItem<T = Record<string, any>> = SortableBaseItem & T;

export type SortableItemList<T = Record<string, any>> = SortableItem<T>[];

/**
 * 状态
 */
export interface SortableListState {
  data: SortableItemList;
  onDataChange?: (data: SortableItemList) => void;
  activeId: string;
}

/**
 * 动作
 */
export interface SortableListAction {
  syncOnDataChange: (onDataChange: OnDataChange) => void;
  /**
   * 同步外部数据源
   */
  syncOutsideData: (data: SortableItemList) => void;
  internalUpdateData: (data: SortableItemList) => void;
  removeItem: (id: string) => void;
  reorder: (startIndex: number, endIndex: number) => void;
  addItem: (item: SortableItem, addIndex?: number) => void;

  // 激活
  activateItem: (id: string) => void;
  deactivateItem: () => void;
}

export type SortableListStore = SortableListState & SortableListAction;

export type OnDataChange = (data: SortableItemList) => void;

// 外部值更新
export interface StoreUpdaterProps {
  data?: SortableItemList;
  defaultData?: SortableItemList;
  onDataChange?: OnDataChange;
}
