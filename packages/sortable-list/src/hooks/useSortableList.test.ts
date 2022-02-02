import { useState } from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import { useSortableList } from './useSortableList';

import type { SortableItemList } from '../types';

describe('useSortableList', () => {
  it('默认值', () => {
    const { result } = renderHook(() => useSortableList());

    expect(result.current.items).toEqual([]);
  });
  it('外部传入初始值', () => {
    const { result } = renderHook(() =>
      useSortableList({ defaultValue: [{ id: '123' }] }),
    );
    expect(result.current.items).toEqual([{ id: '123' }]);
  });

  describe('updateTableStore', () => {
    describe('添加item', () => {
      it('基础添加', () => {
        const { result } = renderHook(() => useSortableList());

        act(() => {
          result.current.dispatchSortable({
            type: 'addItem',
            item: { id: '333' },
          });
        });

        expect(result.current.items).toEqual([{ id: '333' }]);
      });

      it('携带索引的添加', () => {
        const { result } = renderHook(() =>
          useSortableList({ defaultValue: [{ id: '1' }] }),
        );

        act(() => {
          result.current.dispatchSortable({
            type: 'addItem',
            item: { id: '2' },
            addIndex: 0,
          });
        });

        expect(result.current.items).toEqual([{ id: '2' }, { id: '1' }]);
      });
    });
    it('删除item', () => {
      const { result } = renderHook(() =>
        useSortableList({
          defaultValue: [{ id: '1' }, { id: '2' }, { id: '3' }],
        }),
      );

      act(() => {
        result.current.dispatchSortable({
          type: 'removeItem',
          id: '2',
        });
      });

      expect(result.current.items).toEqual([{ id: '1' }, { id: '3' }]);
    });
    it('重排序item', () => {
      const { result } = renderHook(() =>
        useSortableList({
          defaultValue: [{ id: '1' }, { id: '2' }, { id: '3' }],
        }),
      );

      act(() => {
        result.current.dispatchSortable({
          type: 'reorder',
          startIndex: 2,
          endIndex: 0,
        });
      });

      expect(result.current.items).toEqual([
        { id: '3' },
        { id: '1' },
        { id: '2' },
      ]);
    });
  });

  describe('受控模式', () => {
    it('没有 onChange 时不更改', () => {
      const { result } = renderHook(() =>
        useSortableList({
          value: [{ id: '1' }],
        }),
      );
      act(() => {
        result.current.dispatchSortable({
          type: 'addItem',
          item: { id: '333' },
        });
      });

      expect(result.current.items).toEqual([{ id: '1' }]);
    });

    it('外部控制 value', () => {
      const controlledValue: SortableItemList = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ];

      const { result } = renderHook(() => {
        const [value, setConfig] = useState<SortableItemList>();
        const { items } = useSortableList({
          value,
        });

        return { items, setConfig };
      });

      act(() => {
        result.current.setConfig(controlledValue);
      });

      expect(result.current.items).toEqual([
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ]);
    });
    it('内部修改值 外部 value 更新', () => {
      const { result } = renderHook(() => {
        const [value, setConfig] = useState<SortableItemList>([
          { id: '1' },
          { id: '2' },
          { id: '3' },
        ]);

        const { dispatchSortable } = useSortableList({
          value,
          onChange: setConfig,
        });

        return { value, dispatchSortable };
      });

      expect(result.current.value).toEqual([
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ]);

      act(() => {
        result.current.dispatchSortable({
          type: 'reorder',
          startIndex: 2,
          endIndex: 0,
        });
      });

      expect(result.current.value).toEqual([
        { id: '3' },
        { id: '1' },
        { id: '2' },
      ]);

      act(() => {
        result.current.dispatchSortable({
          type: 'reorder',
          startIndex: 2,
          endIndex: 0,
        });
      });

      expect(result.current.value).toEqual([
        { id: '2' },
        { id: '3' },
        { id: '1' },
      ]);
    });
  });
});
