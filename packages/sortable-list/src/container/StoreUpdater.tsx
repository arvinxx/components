import { useStoreUpdater } from '../hooks/useStoreUpdater';
import type { StoreUpdaterProps } from '../types';

const StoreUpdater = (props: StoreUpdaterProps) => {
  useStoreUpdater(props);

  return null;
};

export default StoreUpdater;
