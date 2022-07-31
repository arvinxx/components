import { useEffect } from 'react';
import { useStoreApi } from '../store';
import type { StoreUpdaterProps } from '../types';

const useMergeState = (key, value, deps = [value]) => {
  const storeApi = useStoreApi();
  useEffect(() => {
    if (typeof value !== 'undefined') {
      storeApi.setState((state) => ({ ...state, [key]: value }));
    }
  }, deps);
};

const StoreUpdater = ({
  onSwatchHover,
  onChange,
  onChangeComplete,
  presetColors,
  color,
}: StoreUpdaterProps) => {
  useEffect(() => {
    console.log(color);
  }, [color]);

  useMergeState('presetColors', presetColors);
  useMergeState('onSwatchHover', onSwatchHover);
  useMergeState('onChange', onChange);
  useMergeState('onChangeComplete', onChangeComplete);
  return null;
};

export default StoreUpdater;
