import React from 'react';
import { DragOverlay } from '@dnd-kit/core';
import { Item } from './BaseItem';
import type { FC } from 'react';

import type { DraggingOverlayProps } from '../types';

const DraggingOverlay: FC<DraggingOverlayProps> = ({
  dragging,
  dropAnimation,
  adjustScale,
  item,
  renderItem,
  handle,
  getItemStyles,
  getWrapperStyle,
  activeIndex,
  activeId,
}) => {
  return (
    <DragOverlay adjustScale={adjustScale} dropAnimation={dropAnimation}>
      {dragging ? (
        <Item
          item={item}
          handle={handle}
          renderItem={renderItem}
          wrapperStyle={getWrapperStyle?.({
            index: activeIndex,
            isDragging: true,
            id: item.id,
          })}
          style={getItemStyles({
            id: item.id,
            index: activeIndex,
            isSorting: activeId !== null,
            isDragging: true,
            overIndex: -1,
            isDragOverlay: true,
          })}
          dragOverlay
        />
      ) : null}
    </DragOverlay>
  );
};

export default DraggingOverlay;
