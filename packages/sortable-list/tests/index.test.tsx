import React from 'react';
import { render } from '@testing-library/react';

import SortableList from '@arvinxu/sortable-list';

describe('SortableList', () => {
  it('默认状态', () => {
    const { container } = render(<SortableList />);
    expect(container).toMatchSnapshot();
  });
});
