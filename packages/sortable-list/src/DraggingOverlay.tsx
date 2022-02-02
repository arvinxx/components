import React from 'react';
import { DragOverlay } from '@dnd-kit/core';
import { Item } from './components';
import type { FC } from 'react';

import type { SortableItem, SortableProps } from './types';

interface DraggingOverlayProps
  extends Pick<
    SortableProps,
    | 'adjustScale'
    | 'dropAnimation'
    | 'renderItem'
    | 'handle'
    | 'wrapperStyle'
    | 'getItemStyles'
  > {
  dragging: boolean;
  item: SortableItem;
  activeIndex: number;
  activeId: string;
}

const DraggingOverlay: FC<DraggingOverlayProps> = ({
  dragging,
  dropAnimation,
  adjustScale,
  item,
  renderItem,
  handle,
  getItemStyles,
  wrapperStyle,
  activeIndex,
  activeId,
}) => {
  return (
    <DragOverlay adjustScale={adjustScale} dropAnimation={dropAnimation}>
      {dragging ? (
        <Item
          value={item.id}
          handle={handle}
          renderItem={renderItem}
          wrapperStyle={wrapperStyle({
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
