import React from 'react';
import renderer from 'react-test-renderer';

import Bar from '@arvinxu/modules-bar';

test('Bar', () => {
  const component = renderer.create(<Bar />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
