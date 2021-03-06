import React from 'react';

import { render } from '@testing-library/react';
import type { INewTagProps } from '../src/components/NewTag';
import NewTag from '../src/components/NewTag';

const props: INewTagProps = {
  labelKey: 'rercxc',
  inputVisible: false,
};

describe('Tag', () => {
  it('render', () => {
    const { container } = render(<NewTag {...props} />);

    expect(container).toMatchSnapshot();
  });
  // describe('交互行为', () => {
  //   describe('点击加号按钮添加新标签', () => {
  //     it('showValueInput should run when change', () => {
  //       wrapper.find('Tag').simulate('click');
  //       expect(dispatch.callCount).toEqual(1);
  //     });
  //     ``;
  //   });
  // });
});
// describe('Input', () => {
//   let Input;
//   beforeEach(() => {
//     wrapper.setProps({ inputVisible: true });
//     Input = wrapper.find('Input');
//   });
//   it('render ', () => {
//     expect(Input.length).toEqual(1);
//   });
//
//   describe('交互行为', () => {
//     describe('聚焦时可正常编辑内容', () => {
//       it('newTagOnInput should run when change', () => {
//         Input.simulate('change', { target: { value: '23' } });
//         expect(wrapper.state('text')).toEqual('23');
//       });
//     });
//     describe('修改完毕后按 Enter 保存修改,并结束创建标签', () => {
//       it('dispatch should run once when text is empty & press Enter', () => {
//         wrapper.setState({ text: '' });
//         Input.simulate('keydown', { key: 'Enter', preventDefault: () => {} });
//         expect(dispatch.callCount).toEqual(1);
//       });
//       it('dispatch should run twice when text is not empty & press Enter', () => {
//         wrapper.setState({ text: 'test' });
//         Input.simulate('keydown', { key: 'Enter', preventDefault: () => {} });
//         expect(dispatch.callCount).toEqual(2);
//       });
//     });
//     describe('修改完毕后按Tab保存修改,并继续创建新标签', () => {
//       it('dispatch should run once when text is not empty & press Tab', () => {
//         wrapper.setState({ text: '3223' });
//         Input.simulate('keydown', { key: 'Tab', preventDefault: () => {} });
//         expect(dispatch.callCount).toEqual(1);
//       });
//       it('dispatch should not run when text is empty & press Tab', () => {
//         wrapper.setState({ text: '' });
//         Input.simulate('keydown', { key: 'Tab', preventDefault: () => {} });
//         expect(dispatch.callCount).toEqual(0);
//       });
//     });
//
//     describe('按 ESC 撤销修改并退出', () => {
//       it('cancelVOnEsc should run when press esc', () => {
//         Input.simulate('keydown', { key: 's' });
//         Input.simulate('keydown', { key: 'Escape' });
//         expect(dispatch.callCount).toEqual(1);
//       });
//     });
//
//     describe('鼠标单击空白时取消激活，并保存修改内容', () => {
//       it('newTagOnBlur should run when blur', () => {
//         wrapper.setState({ text: '3223' });
//         Input.simulate('blur');
//         expect(dispatch.callCount).toEqual(2);
//         expect(wrapper.state('text')).toEqual('');
//       });
//     });
//   });
// });
