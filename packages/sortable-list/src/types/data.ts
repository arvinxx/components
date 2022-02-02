import type { UniqueIdentifier } from '@dnd-kit/core';

export interface SortableBaseItem {
  id: UniqueIdentifier;
}

export type SortableItem<T = Record<string, any>> = SortableBaseItem & T;

export type SortableItemList<T = Record<string, any>> = SortableItem<T>[];
