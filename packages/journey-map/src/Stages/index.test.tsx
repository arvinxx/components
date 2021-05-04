import React from 'react';
import { render } from '@testing-library/react';

import Stages from './index';
import { JourneyMapStore, useJourneyMap } from '../useJourneyMap';

import type { FC } from 'react';
import type { Stage } from '../types';

const Demo: FC<{ stages: Stage[] }> = ({ stages }) => {
  const value = useJourneyMap({
    data: {
      actions: {},
      stages,
    },
  });
  return (
    <JourneyMapStore.Provider value={value}>
      <Stages />
    </JourneyMapStore.Provider>
  );
};

describe('Actions', () => {
  it('默认状态', () => {
    const { container } = render(
      <Demo
        stages={[
          { id: '1', name: '1' },
          { id: '2', name: '2', color: 'blue' },
        ]}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
