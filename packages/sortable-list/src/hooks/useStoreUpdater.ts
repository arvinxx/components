import { useEffect } from 'react';
import type { StoreUpdaterProps } from '../types';
import { useStore } from '../store';
import shallow from 'zustand/shallow';

export const useStoreUpdater = ({
  data,
  defaultData,
  onDataChange,
}: StoreUpdaterProps) => {
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
