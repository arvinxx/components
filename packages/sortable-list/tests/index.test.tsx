import React from 'react';
import { render } from '@testing-library/react';

import SortableList from '@arvinxu/sortable-list';

describe('SortableList', () => {
  it('默认状态', () => {
    const { container } = render(<SortableList />);
    expect(container).toMatchSnapshot();
  });
  it('有数据', () => {
    const { container } = render(
      <SortableList dataSource={[{ id: '1' }, { id: '2' }]} />,
    );
    expect(container).toMatchSnapshot();
  });
});
