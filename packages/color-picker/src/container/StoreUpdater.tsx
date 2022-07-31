import type { FC } from 'react';
import React from 'react';
import { createStore, Provider } from '../store';

const StoreUpdater: FC = ({ children }) => {
  return <Provider createStore={createStore}>{children}</Provider>;
};

export default StoreUpdater;
