import './matchMedia.mock'; // Must be imported before the tested file
import React from 'react';
import { render } from '@testing-library/react';

import UserPanel from '@arvinxu/user-panel';

describe('UserPanel', () => {
  it('默认状态', () => {
    const { container } = render(<UserPanel />);
    expect(container).toMatchSnapshot();
  });
});
