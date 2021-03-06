import React from 'react';
import type { FC } from 'react';
import { Tag, Input, Popconfirm } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

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

const EditableTags: FC<IEditableTagsProps> = ({
  tagKey,
  editable,
  text,
  selected,
}) => {
  const editTagText = (e, key) => {
    // ({
    //   type: 'label/changeTagText',
    //   payload: { key, text: e.target.value },
    // });
  };
  const deleteTag = (key) => {
    // ({
    //   type: 'label/deleteTag',
    //   payload: key,
    // });
  };

  const showTagEdit = (key) => {
    // ({
    //   type: 'label/showTagEdit',
    //   payload: key,
    // });
  };
  const hideTagEdit = (key) => {
    // ({
    //   type: 'label/hideTagEdit',
    //   payload: key,
    // });
  };

  const handleSelected = (key, checked) => {
    // ({
    //   type: 'label/handleSelectedTags',
    //   payload: { key, checked },
    // });
  };
  const shiftTagInput = (e) => {
    const key = e.target.id;
    console.log(key);
    e.preventDefault();
  };

  const handlers = {
    tab: shiftTagInput,
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
          onChange={(e) => editTagText(e, tagKey)}
          onPressEnter={() => hideTagEdit(tagKey)}
          onBlur={() => hideTagEdit(tagKey)}
        />
      ) : (
        <div className={styles['value-container']}>
          <CheckableTag
            key={`${tagKey}checkbleTag`}
            checked={selected.indexOf(tagKey) > -1}
            // @ts-ignore
            onDoubleClick={() => showTagEdit(tagKey)}
            onChange={(checked) => handleSelected(tagKey, checked)}
          >
            {text}
          </CheckableTag>
          <Popconfirm
            title="确认要删除吗?"
            onConfirm={() => deleteTag(tagKey)}
            okText="是"
            cancelText="否"
          >
            <CloseOutlined className={styles['value-delete']} />
          </Popconfirm>
        </div>
      )}
    </HotKeys>
  );
};

export default EditableTags;
