import React from 'react';
import { render } from '@testing-library/react';

import Actions from './index';
import { JourneyMapStore, useJourneyMap } from '../useJourneyMap';

import type { FC } from 'react';
import type { UserAction } from '../types';

const Demo: FC<{ actions: Record<string, UserAction[]> }> = ({ actions }) => {
  const value = useJourneyMap({
    data: {
      actions,
      stages: [
        { id: '1', name: '1' },
        { id: '2', name: '2', color: 'blue' },
      ],
    },
  });
  return (
    <JourneyMapStore.Provider value={value}>
      <Actions />
    </JourneyMapStore.Provider>
  );
};

describe('Actions', () => {
  it('默认状态', () => {
    const { container } = render(
      <Demo
        actions={{
          '1': [{ name: '1', color: 'red' }],
          '2': [{ name: '2' }],
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
