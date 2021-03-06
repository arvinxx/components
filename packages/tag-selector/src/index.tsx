import type { FC } from 'react';
import React from 'react';
import { Input } from 'antd';

import Group from './components/Group';
import EditableTags from './components/EditableTags';
import NewTag from './components/NewTag';

import type { Value, Item } from './type';
import { useLabel } from './useLabel';
import './style.less';

const clsPrefix = 'avx-tag-selector';

export interface TagSelectorProps {
  value?: Item[];
  selectedTags?: string[];
}

const TagSelector: FC<TagSelectorProps> = ({ value, selectedTags }) => {
  const {
    data,
    newLabel,
    newLabelPlaceHolder,
    setNewLabel,
    setNewLabelPlaceHolder,
    addNewLabel,
  } = useLabel(value);

  return (
    <div className={`${clsPrefix}-container`}>
      {data?.map((label) => {
        const { key, title, value, inputVisible } = label;
        return (
          <div key={key} className={`${clsPrefix}-key-container`}>
            <Group labelKey={key} value={title} />
            <div className={`${clsPrefix}-value-container`}>
              {value.map((tag: Value) => {
                const { text, key: tagKey, editable } = tag;
                return (
                  <EditableTags
                    key={tagKey}
                    tagKey={tagKey}
                    labelKey={key}
                    editable={editable}
                    selected={selectedTags}
                    text={text}
                  />
                );
              })}
              <NewTag labelKey={key} inputVisible={inputVisible} />
            </div>
          </div>
        );
      })}
      <div className={`${clsPrefix}-key-container`}>
        <Input
          className={`${clsPrefix}-add-key`}
          value={newLabel}
          placeholder={newLabelPlaceHolder}
          onChange={(e) => {
            setNewLabel(e.target.value);
          }}
          onFocus={() => {
            setNewLabelPlaceHolder('');
          }}
          onBlur={() => {
            addNewLabel();
          }}
          onPressEnter={() => {
            addNewLabel(true);
          }}
        />
      </div>
    </div>
  );
};

export default TagSelector;
