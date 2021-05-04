import React from 'react';
import { render } from '@testing-library/react';

import PainPoints from './index';
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
      <PainPoints />
    </JourneyMapStore.Provider>
  );
};

describe('Actions', () => {
  it('默认状态', () => {
    const { container } = render(
      <Demo
        actions={{
          '1': [{ name: '1', painPoints: ['1', '2'] }],
          '2': [{ name: '2', painPoints: ['2-1', '2-2'] }],
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
