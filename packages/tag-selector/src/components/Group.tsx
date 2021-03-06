import React, { Component } from 'react';
import { Input, Popconfirm } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import styles from './Group.less';

export interface IGroupProps {
  labelKey: string;
  value: string;
}
export default class Group extends Component<IGroupProps> {
  static defaultProps: IGroupProps = {
    labelKey: '',
    value: '',
  };

  changeLabel = (e, key) => {
    console.log(e, key);
    // this.props.dispatch({
    //   type: 'label/changeLabelText',
    //   payload: { key, text: e.target.value },
    // });
  };
  deleteLabel = (key) => {
    console.log(key);
    // this.props.dispatch({
    //   type: 'label/deleteLabel',
    //   payload: key,
    // });
  };
  shiftTagInput = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const key = e.target.id;
      console.log(key);

      // this.props.dispatch({
      //   type: 'label/showTagInput',
      //   payload: key,
      // });
    }
  };
  render() {
    const { labelKey, value } = this.props;
    return (
      <div key={labelKey} className={styles.container}>
        <Popconfirm
          title="确认要删除吗?"
          onConfirm={() => this.deleteLabel(labelKey)}
          okText="是"
          cancelText="否"
        >
          <CloseOutlined className={styles.delete} />
        </Popconfirm>
        <Input
          id={labelKey}
          className={styles['exist-key']}
          value={value}
          placeholder={value}
          onKeyDown={this.shiftTagInput}
          onChange={(e) => {
            this.changeLabel(e, labelKey);
          }}
        />
      </div>
    );
  }
}
