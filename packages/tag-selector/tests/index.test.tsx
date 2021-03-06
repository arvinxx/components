import React from 'react';
import { render } from '@testing-library/react';

import TagSelector from '@arvinxu/tag-selector';
import { smallLabel } from '../mock';

describe('TagSelector', () => {
  test('正常渲染', () => {
    const { container } = render(<TagSelector />);
    expect(container).toMatchSnapshot();
  });

  it('smallLabel', () => {
    const { container } = render(<TagSelector value={smallLabel} />);
    expect(container).toMatchSnapshot();
  });
});

// describe('响应操作', () => {
//   let Input;
//   beforeEach(() => {
//     Input = wrapper.find('Input');
//   });
//
//   it('newLabelOnInput should run when change', () => {
//     Input.simulate('change', { target: { value: '1' } });
//     expect(wrapper.state('newLabel')).toEqual('1');
//   });
//   it('newLabelOnFocus should run when focus', () => {
//     expect(wrapper.state('newLabelPlaceHolder')).toEqual('添加条目');
//     Input.simulate('focus');
//     expect(wrapper.state('newLabelPlaceHolder')).toEqual('');
//   });
//
//   describe('newLabelOnBlur', () => {
//     it("newLabelOnBlur should run when blur if there's content", () => {
//       wrapper.setState({ newLabel: '1' });
//       Input.simulate('blur');
//       expect(wrapper.state('newLabelPlaceHolder')).toEqual('添加条目');
//       expect(wrapper.state('newLabel')).toEqual('');
//       expect(dispatch.callCount).toEqual(1);
//     });
//     it("newLabelOnBlur should not run when blur if there's no content", () => {
//       Input.simulate('blur');
//       expect(wrapper.state('newLabelPlaceHolder')).toEqual('添加条目');
//       expect(wrapper.state('newLabel')).toEqual('');
//       expect(dispatch.callCount).toEqual(0);
//     });
//   });
//   describe('newLabelOnBlur', () => {
//     it("newLabelOnBlur should run when blur if there's content", () => {
//       wrapper.setState({ newLabel: '1' });
//       Input.simulate('pressEnter');
//       expect(wrapper.state('newLabelPlaceHolder')).toEqual('');
//       expect(wrapper.state('newLabel')).toEqual('');
//       expect(dispatch.callCount).toEqual(1);
//     });
//     it("newLabelOnPressEnter should not run when pressEnter if there's no content", () => {
//       Input.simulate('pressEnter');
//       expect(wrapper.state('newLabelPlaceHolder')).toEqual('');
//       expect(wrapper.state('newLabel')).toEqual('');
//       expect(dispatch.callCount).toEqual(0);
//     });
//   });
// });
