import React from 'react';
import { render } from '@testing-library/react';

import FloatLabelInput from '@arvinxu/float-label-input';

test('FloatLabelInput', () => {
  const { container } = render(<FloatLabelInput label={'test'} />);
  expect(container).toMatchSnapshot();
});
