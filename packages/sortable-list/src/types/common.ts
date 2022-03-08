import type {
  DraggableSyntheticListeners,
  UniqueIdentifier,
} from '@dnd-kit/core';
import type { CSSProperties, ReactElement, Ref } from 'react';
import type { SortableItem } from './store';

export type RenderItem<T = SortableItem> = (
  item: T,
  options: {
    dragOverlay: boolean;
    dragging: boolean;
    sorting: boolean;
    index: number | undefined;
    fadeIn: boolean;
    listeners: DraggableSyntheticListeners;
    ref: Ref<HTMLElement>;
    style: CSSProperties | undefined;
    transform: any;
    transition: any;
    onRemove: () => void;
    onAddItem: (index: number, newItem: T) => void;
  },
) => ReactElement;

interface GetWrapperStyleArgs {
  index: number;
  isDragging: boolean;
  id: UniqueIdentifier;
}

export type GetWrapperStyle = ({
  index,
  isDragging,
  id,
}: GetWrapperStyleArgs) => CSSProperties;

interface GetItemStylesArgs extends GetWrapperStyleArgs {
  isSorting: boolean;
  overIndex: number;
  isDragOverlay: boolean;
}

export type GetItemStyles = (status: GetItemStylesArgs) => CSSProperties;
