import type {
  CollisionDetection,
  DropAnimation,
  KeyboardCoordinateGetter,
  MeasuringConfiguration,
  Modifiers,
  PointerActivationConstraint,
  UniqueIdentifier,
} from '@dnd-kit/core';
import type {
  AnimateLayoutChanges,
  arrayMove,
  NewIndexGetter,
  SortingStrategy,
} from '@dnd-kit/sortable';
import type { CSSProperties } from 'react';

export interface SortableItem {
  id: UniqueIdentifier;
  [key: string]: any;
}
export type SortableItemList = SortableItem[];

export interface SortableProps {
  direction?: 'vertical' | 'horizontal';
  activationConstraint?: PointerActivationConstraint;
  animateLayoutChanges?: AnimateLayoutChanges;
  adjustScale?: boolean;
  collisionDetection?: CollisionDetection;
  coordinateGetter?: KeyboardCoordinateGetter;
  // Todo: Fix me
  Container?: any;
  dropAnimation?: DropAnimation | null;
  getNewIndex?: NewIndexGetter;
  handle?: boolean;
  itemCount?: number;
  items?: SortableItemList;
  defaultItems?: SortableItemList;
  onItemChange?: (item: SortableItemList) => void;
  measuring?: MeasuringConfiguration;
  modifiers?: Modifiers;
  renderItem?: any;
  removable?: boolean;
  reorderItems?: typeof arrayMove;
  strategy?: SortingStrategy;
  useDragOverlay?: boolean;
  getItemStyles?: (args: {
    id: UniqueIdentifier;
    index: number;
    isSorting: boolean;
    isDragOverlay: boolean;
    overIndex: number;
    isDragging: boolean;
  }) => CSSProperties;
  wrapperStyle?: (args: {
    index: number;
    isDragging: boolean;
    id: string;
  }) => CSSProperties;
  isDisabled?: (id: UniqueIdentifier) => boolean;
  style?: CSSProperties;
}
