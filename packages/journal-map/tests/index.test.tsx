import React from 'react';
import { render } from '@testing-library/react';

import JournalMap from '@arvinxu/journal-map';

describe('JournalMap', () => {
  it('默认状态', () => {
    const { container } = render(
      <JournalMap data={{ actions: {}, steps: [] }} />,
    );
    expect(container).toMatchSnapshot();
  });
});
