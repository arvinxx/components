import React from 'react';

import { render } from '@testing-library/react';
import type { IGroupProps } from '../src/components/Group';
import Group from '../src/components/Group';

const props: IGroupProps = { labelKey: '123', value: '24124' };

test('Group 正常渲染', () => {
  const { container } = render(<Group {...props} />);

  expect(container).toMatchSnapshot();
});

// describe('response', () => {
//   describe('单击字进入编辑模式', () => {
//     it('css should change when on click', () => {
//       //TODO CSS
//     });
//     describe('编辑模式下可直接编辑内容', () => {
//       it('changeLabel should run when change', () => {
//         wrapper.find('Input').simulate('change', { target: { value: '1' } });
//         expect(dispatch.callCount).toEqual(1);
//       });
//     });
//   });
//
//   describe('鼠标悬浮在标签上显示删除 ICON', () => {
//     it('optic should be 1', () => {
//       //TODO test CSS
//     });
//   });
//
//   describe('点击删除 ICON 跳出确认框', () => {
//     describe('点击确认删除标签', () => {
//       it('deleteLabel should run when confirm', () => {
//         const wrapper = shallow(<App {...props} dispatch={dispatch} />);
//         wrapper.find('Popconfirm').simulate('confirm');
//         expect(dispatch.callCount).toEqual(1);
//       });
//     });
//   });
//   describe('按 shift 结束 Group 编辑', () => {
//     it('dispatch should run once in shiftTagInput when press tab', () => {
//       const wrapper = shallow(<App {...props} dispatch={dispatch} />);
//       wrapper
//         .find('Input')
//         .simulate('keydown', { target: { id: '3' }, key: 'Tab', preventDefault: () => {} });
//       expect(dispatch.callCount).toEqual(1);
//     });
//     it('dispatch should not run in shiftTagInput when not press tab', () => {
//       const wrapper = shallow(<App {...props} dispatch={dispatch} />);
//       wrapper
//         .find('Input')
//         .simulate('keydown', { target: { id: '3' }, key: 'a', preventDefault: () => {} });
//       expect(dispatch.callCount).toEqual(0);
//     });
//   });
// });
