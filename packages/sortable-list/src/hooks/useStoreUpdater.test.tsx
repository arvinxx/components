import React, { useCallback, useState } from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import { useStoreUpdater } from './useStoreUpdater';
import type { SortableItemList } from '../types';
import { createStore, Provider, useStore } from '../store';

const renderOptions = {
  wrapper: ({ children }) => (
    <Provider createStore={createStore}>{children}</Provider>
  ),
};
describe('useStoreUpdater', () => {
  it('外部控制初始值', () => {
    const { result } = renderHook(() => {
      useStoreUpdater({ defaultData: [{ id: '123' }] });

      return useStore((s) => s.data);
    }, renderOptions);
    expect(result.current).toEqual([{ id: '123' }]);
  });

  it('外部设置值', () => {
    const { result } = renderHook(() => {
      useStoreUpdater({ data: [{ id: '123' }] });
      return useStore((s) => s.data);
    }, renderOptions);

    expect(result.current).toEqual([{ id: '123' }]);
  });

  it('外部 setValue', () => {
    const controlledValue: SortableItemList = [
      { id: '1' },
      { id: '2' },
      { id: '3' },
    ];

    const { result } = renderHook(() => {
      const [value, setConfig] = useState<SortableItemList>();
      useStoreUpdater({
        data: value,
      });

      const data = useStore((s) => s.data);
      return { data, setConfig };
    }, renderOptions);

    act(() => {
      result.current.setConfig(controlledValue);
    });

    expect(result.current.data).toEqual([
      { id: '1' },
      { id: '2' },
      { id: '3' },
    ]);
  });

  it('没有 onChange 时不更改', () => {
    const useNoOnChange = () => {
      const [data] = useState([{ id: '1' }]);
      useStoreUpdater({ data: data });

      const store = useStore();
      return { store, data };
    };
    const { result } = renderHook(() => useNoOnChange(), renderOptions);
    //
    //
    act(() => {
      result.current.store.addItem({ id: '333' });
    });

    expect(result.current.data).toEqual([{ id: '1' }]);
  });

  it('内部修改值 外部 value 更新', () => {
    const { result } = renderHook(() => {
      const [value, setConfig] = useState<SortableItemList>([
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ]);

      const func = useCallback((data) => {
        console.log('xuga', data);
        setConfig(data);
      }, []);

      useStoreUpdater({
        data: value,
        onDataChange: func,
      });

      const reorder = useStore((s) => s.reorder);

      return { value, reorder };
    }, renderOptions);

    expect(result.current.value).toEqual([
      { id: '1' },
      { id: '2' },
      { id: '3' },
    ]);

    act(() => {
      result.current.reorder(2, 0);
    });

    expect(result.current.value).toEqual([
      { id: '3' },
      { id: '1' },
      { id: '2' },
    ]);

    act(() => {
      result.current.reorder(1, 0);
    });

    expect(result.current.value).toEqual([
      { id: '1' },
      { id: '3' },
      { id: '2' },
    ]);

    act(() => {
      result.current.reorder(1, 1);
    });

    expect(result.current.value).toEqual([
      { id: '1' },
      { id: '3' },
      { id: '2' },
    ]);
  });
});
