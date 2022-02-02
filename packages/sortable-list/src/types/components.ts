import type { CSSProperties } from 'react';
import type { AnimateLayoutChanges, NewIndexGetter } from '@dnd-kit/sortable';
import type {
  CollisionDetection,
  DraggableSyntheticListeners,
  DropAnimation,
  KeyboardCoordinateGetter,
  MeasuringConfiguration,
  Modifiers,
  PointerActivationConstraint,
  UniqueIdentifier,
} from '@dnd-kit/core';
import type { SortingStrategy } from '@dnd-kit/sortable';
import type { Transform } from '@dnd-kit/utilities';

import type { GetItemStyles, GetWrapperStyle, RenderItem } from './common';
import type { SortableItem, SortableItemList } from './data';

export interface BaseItemProps
  extends Pick<
    SortableItemProps,
    'renderItem' | 'handle' | 'disabled' | 'removable' | 'item' | 'onAddItem'
  > {
  color?: string;
  dragOverlay?: boolean;
  index?: number;
  dragging?: boolean;
  height?: number;
  fadeIn?: boolean;
  transform?: Transform | null;
  listeners?: DraggableSyntheticListeners;
  sorting?: boolean;
  transition?: string | null;
  style?: CSSProperties;
  wrapperStyle?: CSSProperties;
  onRemove?: () => void;
}

export interface SortableItemProps
  extends Pick<
    SortableProps,
    | 'animateLayoutChanges'
    | 'useDragOverlay'
    | 'handle'
    | 'getItemStyles'
    | 'renderItem'
    | 'getWrapperStyle'
    | 'removable'
  > {
  disabled?: boolean;
  getNewIndex?: NewIndexGetter;
  id: string;
  index: number;
  item: SortableItem;
  onRemove?: (id: string) => void;
  onAddItem?: (index: number, item: any) => void;
}

export interface DraggingOverlayProps
  extends Pick<
    SortableProps,
    | 'adjustScale'
    | 'dropAnimation'
    | 'renderItem'
    | 'handle'
    | 'getWrapperStyle'
    | 'getItemStyles'
  > {
  dragging: boolean;
  item: SortableItem;
  activeIndex: number;
  activeId: string;
}

export interface SortableProps {
  direction?: 'vertical' | 'horizontal';
  activationConstraint?: PointerActivationConstraint;
  animateLayoutChanges?: AnimateLayoutChanges;
  adjustScale?: boolean;
  collisionDetection?: CollisionDetection;
  coordinateGetter?: KeyboardCoordinateGetter;
  // Todo: Fix me
  Container?: any;
  dropAnimation?: DropAnimation;
  getNewIndex?: NewIndexGetter;
  handle?: boolean;
  items?: SortableItemList;
  onItemChange?: (item: SortableItemList) => void;
  measuring?: MeasuringConfiguration;
  modifiers?: Modifiers;
  /**
   * 自定义 Item 的渲染方法
   */
  renderItem?: RenderItem;
  removable?: boolean;
  strategy?: SortingStrategy;
  useDragOverlay?: boolean;
  getItemStyles?: GetItemStyles;
  getWrapperStyle?: GetWrapperStyle;
  isDisabled?: (id: UniqueIdentifier) => boolean;
  style?: CSSProperties;
  className?: string;
  /**
   * item 之间的间距
   **/
  gap?: number;
}

export interface SortableListProps<T>
  extends Pick<
    SortableProps,
    | 'style'
    | 'getItemStyles'
    | 'removable'
    | 'className'
    | 'renderItem'
    | 'direction'
    | 'gap'
  > {
  /**
   * 数据源
   */
  dataSource?: T;
  /**
   * 变更值
   * @param value
   */
  onChange: (value: T) => void;
  /**
   * 是否限制拖拽轴
   */
  restrictAxis?: boolean;
  /**
   * 是否限制边界
   */
  restrictEdge?: boolean;
}
