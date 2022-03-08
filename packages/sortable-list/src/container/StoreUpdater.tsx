import { useEffect } from 'react';

import { useStore } from '../store';
import type {
  StoreUpdaterProps,
  SortableItemList,
  OnDataChange,
} from '../types';

const useStoreUpdater = <T extends any>(
  value: T | undefined,
  setStoreState: (param: T) => void,
) => {
  useEffect(() => {
    if (typeof value !== 'undefined') {
      setStoreState(value);
    }
  }, [value]);
};

const StoreUpdater = (props: StoreUpdaterProps) => {
  const syncOutsideProps = useStore((s) => s.syncOutsideProps);

  useStoreUpdater<SortableItemList>(props.data, (data) => {
    syncOutsideProps({ data });
  });

  useStoreUpdater<OnDataChange>(props.onDataChange, (fn) => {
    syncOutsideProps({ onDataChange: fn });
  });

  return null;
};

export default StoreUpdater;
