import type { FC } from 'react';
import React from 'react';
import { createPortal } from 'react-dom';

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';

import {
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

import { Wrapper } from './components';

import SortableItem from './SortableItem';
import DraggingOverlay from './DraggingOverlay';

import type { SortableProps } from './types';

import { useSortableList } from './hooks/useSortableList';
import { useActiveItem } from './hooks/useActiveItem';
import { getIndexOfActiveItem } from './utils';

export const Sortable: FC<SortableProps> = ({
  activationConstraint,
  animateLayoutChanges,
  adjustScale = false,
  Container = Wrapper,
  collisionDetection = closestCenter,
  coordinateGetter = sortableKeyboardCoordinates,
  dropAnimation,
  getItemStyles = () => ({}),
  getNewIndex,
  handle = false,
  items: controlledItems,
  defaultItems,
  onItemChange,
  isDisabled = () => false,
  measuring,
  modifiers,
  removable,
  renderItem,
  strategy,
  style,
  useDragOverlay = true,
  wrapperStyle = () => ({}),
  direction,
}) => {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint,
    }),
    useSensor(TouchSensor, {
      activationConstraint,
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter,
    }),
  );

  const { items, dispatchSortable } = useSortableList({
    value: controlledItems,
    defaultValue: defaultItems,
    onChange: onItemChange,
  });

  const { deactivateItem, activateItem, activeId, isDragging } =
    useActiveItem();

  const activeIndex = getIndexOfActiveItem(items, activeId);

  const handleRemove = (id: string) => {
    if (!removable) return;

    dispatchSortable({ type: 'removeItem', id });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetection}
      onDragStart={({ active }) => {
        if (!active) return;

        activateItem(active.id);
      }}
      onDragEnd={({ over }) => {
        if (over) {
          const endIndex = getIndexOfActiveItem(items, over.id);

          dispatchSortable({
            type: 'reorder',
            startIndex: activeIndex,
            endIndex,
          });
        }
        deactivateItem();
      }}
      onDragCancel={() => deactivateItem()}
      measuring={measuring}
      modifiers={modifiers}
    >
      <SortableContext items={items} strategy={strategy}>
        <Container style={style}>
          {items.map((value, index) => (
            <SortableItem
              key={value.id}
              id={value.id}
              handle={handle}
              index={index}
              style={getItemStyles}
              wrapperStyle={wrapperStyle}
              disabled={isDisabled(value.id)}
              renderItem={renderItem}
              onRemove={handleRemove}
              animateLayoutChanges={animateLayoutChanges}
              useDragOverlay={useDragOverlay}
              getNewIndex={getNewIndex}
            />
          ))}
        </Container>
      </SortableContext>
      {useDragOverlay
        ? createPortal(
            <DraggingOverlay
              adjustScale={adjustScale}
              dropAnimation={dropAnimation}
              dragging={isDragging}
              activeId={activeId}
              activeIndex={activeIndex}
              item={items[activeIndex]}
              getItemStyles={getItemStyles}
              wrapperStyle={wrapperStyle}
              handle={handle}
              renderItem={renderItem}
            />,
            document.body,
          )
        : null}
    </DndContext>
  );
};

export default Sortable;
