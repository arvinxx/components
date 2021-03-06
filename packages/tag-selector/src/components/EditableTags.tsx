import React, { Component, Fragment } from 'react';
import { Tag, Input, Icon, Popconfirm } from 'antd';
import { HotKeys } from 'react-hotkeys';

import styles from './EditableTags.less';

const { CheckableTag } = Tag;

export interface IEditableTagsProps {
  labelKey: string;
  tagKey: string;
  editable: boolean;
  text: string;
  selected: string[];
}
export default class EditableTags extends Component<IEditableTagsProps> {
  static defaultProps: IEditableTagsProps = {
    editable: false,
    labelKey: '',
    text: '',
    tagKey: '',
    selected: [],
  };

  editTagText = (e, key) => {
    this.props.dispatch({
      type: 'label/changeTagText',
      payload: { key, text: e.target.value },
    });
  };
  deleteTag = (key) => {
    this.props.dispatch({
      type: 'label/deleteTag',
      payload: key,
    });
  };

  showTagEdit = (key) => {
    this.props.dispatch({
      type: 'label/showTagEdit',
      payload: key,
    });
  };
  hideTagEdit = (key) => {
    this.props.dispatch({
      type: 'label/hideTagEdit',
      payload: key,
    });
  };

  handleSelected = (key, checked) => {
    this.props.dispatch({
      type: 'label/handleSelectedTags',
      payload: { key, checked },
    });
  };
  shiftTagInput = (e) => {
    const key = e.target.id;
    console.log(key);
    e.preventDefault();
  };
  render() {
    const { tagKey, editable, text, selected } = this.props;

    const handlers = {
      tab: this.shiftTagInput,
    };

    return (
      <HotKeys handlers={handlers}>
        {editable ? (
          <Input
            id={tagKey}
            key={`${tagKey}-edit`}
            type="text"
            size="small"
            className={styles['value-input']}
            value={text}
            onChange={(e) => this.editTagText(e, tagKey)}
            onPressEnter={() => this.hideTagEdit(tagKey)}
            onBlur={() => this.hideTagEdit(tagKey)}
          />
        ) : (
          <div className={styles['value-container']}>
            <CheckableTag
              key={`${tagKey}checkbleTag`}
              checked={selected.indexOf(tagKey) > -1}
              onDoubleClick={() => this.showTagEdit(tagKey)}
              onChange={(checked) => this.handleSelected(tagKey, checked)}
            >
              {text}
            </CheckableTag>
            <Popconfirm
              title="确认要删除吗?"
              onConfirm={() => this.deleteTag(tagKey)}
              okText="是"
              cancelText="否"
            >
              <Icon type="close" className={styles['value-delete']} />
            </Popconfirm>
          </div>
        )}
      </HotKeys>
    );
  }
}
