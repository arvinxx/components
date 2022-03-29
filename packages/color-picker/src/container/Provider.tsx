import type { FC } from 'react';
import { createStore, Provider } from '../store';
import React from 'react';

const Wrapper: FC = ({ children }) => {
  return <Provider createStore={createStore}>{children}</Provider>;
};

export default Wrapper;
