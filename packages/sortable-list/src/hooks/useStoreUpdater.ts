import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import { useStore } from '../store';
import type { StoreUpdaterProps } from '../types';

export const useStoreUpdater = ({ data, defaultData, onDataChange }: StoreUpdaterProps) => {
  const { syncOnDataChange, syncOutsideData } = useStore(
    (s) => ({
      syncOutsideData: s.syncOutsideData,
      syncOnDataChange: s.syncOnDataChange,
    }),
    shallow,
  );

  useEffect(() => {
    if (defaultData) {
      syncOutsideData(defaultData);
    }
  }, []);

  useEffect(() => {
    if (!data) return;
    syncOutsideData(data);
  }, [data]);

  useEffect(() => {
    if (!onDataChange) return;

    syncOnDataChange(onDataChange);
  }, [onDataChange]);
};
