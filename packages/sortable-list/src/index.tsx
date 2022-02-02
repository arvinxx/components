import type { ReactElement } from 'react';
import React, { useCallback, useMemo } from 'react';

import type { Modifier, DropAnimation } from '@dnd-kit/core';

import { defaultDropAnimation } from '@dnd-kit/core';
import {
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  restrictToVerticalAxis,
  restrictToHorizontalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';

import { Sortable } from './Sortable';
import type { SortableItemList, SortableListProps } from './types';

const defaultDropAnimationConfig: DropAnimation = {
  ...defaultDropAnimation,
  dragSourceOpacity: 0.5,
};

function SortableList<T extends SortableItemList = SortableItemList>({
  dataSource,
  onChange,
  direction,
  restrictAxis = true,
  restrictEdge = true,
  renderItem,
  removable,
  style,
  getItemStyles,
  className,
  gap,
}: SortableListProps<T>): ReactElement {
  /**
   * 获取修改器
   */
  const getModifiers = useCallback(
    (axisModifier: Modifier) => {
      const list: Modifier[] = [];

      if (restrictEdge) {
        list.push(restrictToWindowEdges);
      }
      if (restrictAxis) {
        list.push(axisModifier);
      }

      return list;
    },
    [restrictAxis, restrictEdge],
  );

  /**
   * 关于拖拽的交互的配置能力
   */
  const config = useMemo(() => {
    switch (direction) {
      case 'vertical':
      default:
        return {
          strategy: verticalListSortingStrategy,
          modifiers: getModifiers(restrictToVerticalAxis),
        };
      case 'horizontal': {
        return {
          strategy: horizontalListSortingStrategy,
          modifiers: getModifiers(restrictToHorizontalAxis),
        };
      }
    }
  }, [direction, getModifiers]);

  return (
    <Sortable
      direction={direction}
      items={dataSource}
      onItemChange={onChange}
      dropAnimation={defaultDropAnimationConfig}
      renderItem={renderItem}
      removable={removable}
      {...config}
      style={style}
      getItemStyles={getItemStyles}
      className={className}
      gap={gap}
    />
  );
}

export default SortableList;

export type {
  SortableBaseItem,
  SortableItemList,
  SortableListProps,
} from './types';
