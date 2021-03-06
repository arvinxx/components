import React from 'react';
import { render } from '@testing-library/react';

import type { IEditableTagsProps } from '../src/components/EditableTags';
import EditableTags from '../src/components/EditableTags';

const props: IEditableTagsProps = {
  labelKey: 'rercxc',
  tagKey: 'dsdsaadfewc',
  editable: false,
  text: 'test',
  selected: [],
};

describe('EditableTags', () => {
  it('正常渲染', () => {
    const { container } = render(<EditableTags {...props} />);

    expect(container).toMatchSnapshot();
  });
  // describe('响应操作', () => {
  //   describe('双击标签进入编辑模式', () => {
  //     it('showTagEdit should run when double click', () => {
  //       wrapper.find('CheckableTag').simulate('doubleClick');
  //       expect(dispatch.callCount).toEqual(1);
  //     });
  //   });
  //
  //   it('handleSelected should run when click', () => {
  //     wrapper.find('CheckableTag').simulate('change', true);
  //     expect(dispatch.callCount).toEqual(1);
  //   });
  //   it('deleteTag should run when confirm', () => {
  //     const wrapper = shallow(<App {...props} dispatch={dispatch} />);
  //     wrapper.find('Popconfirm').simulate('confirm');
  //     expect(dispatch.callCount).toEqual(1);
  //   });
  // });
});

// describe('Input', () => {
//   let Input;
//   beforeEach(() => {
//     wrapper.setProps({ editable: true });
//     Input = wrapper.find('Input');
//   });
//   it('正常渲染', () => {
//     expect(wrapper.find('Input').length).toEqual(1);
//     expect(wrapper.find('.value-container').length).toEqual(0);
//   });
//   describe('响应操作', () => {
//     it('editTagText should run when change text', () => {
//       Input.simulate('change', { target: { value: '23' } });
//       expect(dispatch.callCount).toEqual(1);
//     });
//     it('hideValueEdit should run when Press Enter', () => {
//       Input.simulate('pressEnter');
//       expect(dispatch.callCount).toEqual(1);
//     });
//     it('hideValueEdit should run when blur', () => {
//       Input.simulate('blur');
//       expect(dispatch.callCount).toEqual(1);
//     });
//   });
// });
