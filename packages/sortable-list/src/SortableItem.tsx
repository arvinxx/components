import type { FC } from 'react';
import React from 'react';

import { useSortable } from '@dnd-kit/sortable';

import { Item } from './BaseItem';
import type { SortableItemProps } from './types';

const SortableItem: FC<SortableItemProps> = ({
  //数据
  item,
  id,
  index,
  renderItem,
  // 方法
  getNewIndex,
  onRemove,
  onAddItem,
  // 状态
  disabled,
  handle,
  removable,
  // 样式
  animateLayoutChanges,
  getItemStyles,
  useDragOverlay,
  getWrapperStyle,
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
      data-index={index}
      data-id={id}
      ref={setNodeRef}
      renderItem={renderItem}
      // 数据
      item={item}
      index={index}
      disabled={disabled}
      dragging={isDragging}
      sorting={isSorting}
      removable={removable}
      handle={handle}
      dragOverlay={!useDragOverlay && isDragging}
      // 样式
      style={getItemStyles({
        index,
        id,
        isDragging,
        isSorting,
        overIndex,
        isDragOverlay: false,
      })}
      wrapperStyle={getWrapperStyle?.({ index, isDragging, id })}
      transform={transform}
      transition={transition}
      //
      listeners={listeners}
      onRemove={() => onRemove(id)}
      onAddItem={onAddItem}
      {...attributes}
    />
  );
};

export default SortableItem;
