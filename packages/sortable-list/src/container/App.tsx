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

import SortableItem from '../components/SortableItem';
import DraggingOverlay from '../components/DraggingOverlay';

import type { SortableProps, SortableListStore } from '../types';

import { useStore } from '../store';
import { getIndexOfActiveItem } from '../store/utils';

const dataSelector = (s: SortableListStore) => s.data;

const activeSelector = (s: SortableListStore) => ({
  isDragging: s.activeId !== null,
  activeIndex: getIndexOfActiveItem(s.data, s.activeId),
});

const actionSelector = (s: SortableListStore) => ({
  deactivateItem: s.deactivateItem,
  activateItem: s.activateItem,
  reorder: s.reorder,
  removeItem: s.removeItem,
  addItem: s.addItem,
});

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

  const items = useStore(dataSelector);
  const { activeIndex, isDragging } = useStore(activeSelector);
  const { deactivateItem, activateItem, reorder, addItem, removeItem } =
    useStore(actionSelector);

  const handleRemove = (id: string) => {
    if (!removable) return;

    removeItem(id);
  };

  const handleAddItem = (index: number, item: any) => {
    addItem(item, index);
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

          reorder(activeIndex, endIndex);
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
