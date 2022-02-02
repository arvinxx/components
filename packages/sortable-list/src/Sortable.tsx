import type { CSSProperties, FC } from 'react';
import React from 'react';
import { createPortal } from 'react-dom';

import cls from 'classnames';

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
import { Flexbox } from '@arvinxu/layout-kit';

import SortableItem from './SortableItem';
import DraggingOverlay from './DraggingOverlay';

import type { SortableProps } from './types';

import { useSortableList } from './hooks/useSortableList';
import { useActiveItem } from './hooks/useActiveItem';
import { getIndexOfActiveItem } from './utils';

const Wrapper: FC<{
  style?: CSSProperties;
  className?: string;
  gap?: number;
}> = ({ children, style, className, gap = 8 }) => (
  <Flexbox
    className={cls('avx-sortable-list', className)}
    style={style}
    gap={gap}
  >
    {children}
  </Flexbox>
);

export const Sortable: FC<SortableProps> = ({
  //数据
  items: controlledItems,
  onItemChange,
  // 方法
  strategy,
  renderItem,
  Container = Wrapper,
  activationConstraint,
  animateLayoutChanges,
  collisionDetection = closestCenter,
  coordinateGetter = sortableKeyboardCoordinates,
  getNewIndex,
  modifiers,
  // 状态
  handle = false,
  isDisabled = () => false,
  measuring,
  removable = true,
  //样式
  adjustScale = false,
  direction,
  dropAnimation,
  useDragOverlay = true,
  getWrapperStyle,
  getItemStyles = () => ({}),
  style,
  className,
  gap,
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
    onChange: onItemChange,
  });

  const { deactivateItem, activateItem, activeId, isDragging } =
    useActiveItem();

  const activeIndex = getIndexOfActiveItem(items, activeId);

  const handleRemove = (id: string) => {
    if (!removable) return;

    dispatchSortable({ type: 'removeItem', id });
  };

  const handleAddItem = (index: number, item: any) => {
    dispatchSortable({ type: 'addItem', item, addIndex: index });
  };
  return (
    // 最外层的 DndContext
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
      {/* 排序 Context 和 SortableItem */}
      <SortableContext items={items} strategy={strategy}>
        <Container
          style={style}
          direction={direction}
          className={className}
          gap={gap}
        >
          {items.map((value, index) => (
            <SortableItem
              key={value.id}
              id={value.id}
              index={index}
              item={value}
              handle={handle}
              getItemStyles={getItemStyles}
              getWrapperStyle={getWrapperStyle}
              disabled={isDisabled(value.id)}
              renderItem={renderItem}
              removable={removable}
              onAddItem={handleAddItem}
              onRemove={handleRemove}
              animateLayoutChanges={animateLayoutChanges}
              useDragOverlay={useDragOverlay}
              getNewIndex={getNewIndex}
            />
          ))}
        </Container>
      </SortableContext>

      {
        // 展示拖拽时的样式
        useDragOverlay
          ? createPortal(
              <DraggingOverlay
                adjustScale={adjustScale}
                dropAnimation={dropAnimation}
                dragging={isDragging}
                activeId={activeId}
                activeIndex={activeIndex}
                item={items[activeIndex]}
                getItemStyles={getItemStyles}
                getWrapperStyle={getWrapperStyle}
                handle={handle}
                renderItem={renderItem}
              />,
              document.body,
            )
          : null
      }
    </DndContext>
  );
};

export default Sortable;
