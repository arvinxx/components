import React, { useCallback, useMemo } from 'react';
import type { FC } from 'react';
import type { Modifier } from '@dnd-kit/core';
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
import type { SortableItemList } from './types';
import { defaultDropAnimation, DropAnimation } from '@dnd-kit/core';

export interface SortableListProps<T = SortableItemList> {
  /**
   * 数据源
   */
  value: T;
  /**
   * 变更值
   * @param value
   */
  onChange: (value: T) => void;
  direction?: 'vertical' | 'horizontal';
  /**
   * 是否限制拖拽轴
   */
  restrictAxis?: boolean;
  /**
   * 是否限制边界
   */
  restrictEdge?: boolean;
}

const defaultDropAnimationConfig: DropAnimation = {
  ...defaultDropAnimation,
  dragSourceOpacity: 0.5,
};

const SortableList: FC<SortableListProps> = ({
  value,
  onChange,
  direction,
  restrictAxis = true,
  restrictEdge = true,
}) => {
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
      items={value}
      onItemChange={onChange}
      dropAnimation={defaultDropAnimationConfig}
      {...config}
    />
  );
};

export default SortableList;
