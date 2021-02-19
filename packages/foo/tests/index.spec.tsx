import React from 'react';
import renderer from 'react-test-renderer';

import Foo from '@arvinxu/modules-foo';

test('Foo', () => {
  const component = renderer.create(<Foo />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
