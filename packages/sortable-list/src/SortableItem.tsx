import type { FC } from 'react';
import React from 'react';

import type { AnimateLayoutChanges, NewIndexGetter } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';

import { Item } from './Item';

interface SortableItemProps {
  animateLayoutChanges?: AnimateLayoutChanges;
  disabled?: boolean;
  getNewIndex?: NewIndexGetter;
  id: string;
  index: number;
  handle: boolean;
  useDragOverlay?: boolean;
  onRemove?: (id: string) => void;
  style: (values: any) => React.CSSProperties;
  renderItem?: (args: any) => React.ReactElement;
  wrapperStyle: ({
    index,
    isDragging,
    id,
  }: {
    index: number;
    isDragging: boolean;
    id: string;
  }) => React.CSSProperties;
}

const SortableItem: FC<SortableItemProps> = ({
  disabled,
  animateLayoutChanges,
  getNewIndex,
  handle,
  id,
  index,
  onRemove,
  style,
  renderItem,
  useDragOverlay,
  wrapperStyle,
}) => {
  const {
    attributes,
    isDragging,
    isSorting,
    listeners,
    overIndex,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
    animateLayoutChanges,
    disabled,
    getNewIndex,
  });

  return (
    <Item
      ref={setNodeRef}
      value={id}
      disabled={disabled}
      dragging={isDragging}
      sorting={isSorting}
      handle={handle}
      renderItem={renderItem}
      index={index}
      style={style({
        index,
        id,
        isDragging,
        isSorting,
        overIndex,
      })}
      onRemove={onRemove ? () => onRemove(id) : undefined}
      transform={transform}
      transition={transition}
      wrapperStyle={wrapperStyle({ index, isDragging, id })}
      listeners={listeners}
      data-index={index}
      data-id={id}
      dragOverlay={!useDragOverlay && isDragging}
      {...attributes}
    />
  );
};

export default SortableItem;
