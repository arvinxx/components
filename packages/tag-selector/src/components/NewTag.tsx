import React, { PureComponent } from 'react';
import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import styles from './NewTag.less';

export interface INewTagProps {
  labelKey: string;
  inputVisible: boolean;
}
export default class NewTag extends PureComponent<INewTagProps> {
  static defaultProps: INewTagProps = {
    labelKey: '',
    inputVisible: false,
  };
  state = { text: '' };

  newTagOnInput = (e) => {
    this.setState({ text: e.target.value });
  };

  handleKeyDown = (e, key) => {
    console.log(key);
    // 按 ESC 撤销修改并退出
    if (e.key === 'Escape') {
      // this.props.dispatch({
      //   type: 'label/hideTagInput',
      //   payload: key,
      // });
      this.setState({ text: '' });
    }

    // 修改完毕后按 Tab 保存修改,并继续创建新标签
    // 修改完毕后按 Enter 保存修改,并结束创建标签
    if (e.key === 'Tab' || e.key === 'Enter') {
      e.preventDefault();
      const { text } = this.state;
      if (text !== '') {
        // this.props.dispatch({
        //   type: 'label/addTag',
        //   payload: { key, text },
        // });
      }
      if (e.key === 'Enter') {
        // this.props.dispatch({
        //   type: 'label/hideTagInput',
        //   payload: key,
        // });
      }
      this.setState({ text: '' });
    }
  };

  showTagInput = (key) => {
    console.log(key);
    // this.props.dispatch({
    //   type: 'label/showTagInput',
    //   payload: key,
    // });
  };
  newTagOnBlur = (key) => {
    const { text } = this.state;
    console.log(key);
    if (text !== '') {
      // this.props.dispatch({
      //   type: 'label/addTag',
      //   payload: { key, text },
      // });
    }
    // this.props.dispatch({
    //   type: 'label/hideTagInput',
    //   payload: key,
    // });
    this.setState({ text: '' });
  };

  render() {
    const { labelKey: key, inputVisible } = this.props;
    const { text } = this.state;

    return inputVisible ? (
      <Input
        key={`${key}-add`}
        type="text"
        size="small"
        autoFocus={inputVisible}
        className={styles.input}
        value={text}
        onKeyDown={(e) => this.handleKeyDown(e, key)}
        onChange={this.newTagOnInput}
        onBlur={() => this.newTagOnBlur(key)}
      />
    ) : (
      <Tag
        key={`${key}-plus`}
        onClick={() => this.showTagInput(key)}
        className={styles.plus}
      >
        <PlusOutlined />
      </Tag>
    );
  }
}
