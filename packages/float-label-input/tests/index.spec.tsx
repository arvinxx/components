import React from 'react';
import renderer from 'react-test-renderer';

import FloatLabelInput from '@arvinxu/float-label-input';

test('FloatLabelInput', () => {
  const component = renderer.create(<FloatLabelInput label={'test'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
