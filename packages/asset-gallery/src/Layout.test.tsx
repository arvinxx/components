import React from 'react';
import { render } from '@testing-library/react';

import Layout from './Layout';

describe('Layout', () => {
  it('瀑布流布局', () => {
    const { container } = render(<Layout layout={'masonry'} />);
    expect(container).toMatchSnapshot();
  });
  // it('Grid 布局', () => {
  //   const { container } = render(
  //     <Layout layout={'grid'} grid={{ columns: 1 }} />,
  //   );
  //   expect(container).toMatchSnapshot();
  // });
});
