import React from 'react';
import { render } from '@testing-library/react';

import Chart from './index';
import { JourneyMapStore, useJourneyMap } from '../useJourneyMap';

import type { FC } from 'react';
import type { JourneyMapData } from '../types';

const Demo: FC<{ data: JourneyMapData }> = ({ data }) => {
  const value = useJourneyMap({
    data,
  });
  return (
    <JourneyMapStore.Provider value={value}>
      <Chart />
    </JourneyMapStore.Provider>
  );
};

describe('Chart', () => {
  it('默认状态', async () => {
    const { container } = render(
      <Demo
        data={{
          actions: {
            '1': [{ name: '1', emotion: 1 }],
            '2': [{ name: '2', emotion: 2 }],
            '0': [{ name: '0', emotion: -1 }],
            '3': [{ name: '3', emotion: -2 }],
            '4': [{ name: '4', emotion: 0 }],
            '5': [{ name: '5' }],
          },
          stages: [],
        }}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
