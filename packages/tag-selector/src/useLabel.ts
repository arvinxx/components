import { useState } from 'react';
import useMergeValue from 'use-merge-value';

export const useLabel = (value?) => {
  const [data] = useMergeValue(value);
  const [newLabel, setNewLabel] = useState('');
  const [newLabelPlaceHolder, setNewLabelPlaceHolder] = useState('添加条目');

  const addLabel = () => {
    if (newLabel === '') return;
    console.log('添加!');
  };

  const resetLabel = (placeholder: string = '添加条目') => {
    setNewLabel('');
    setNewLabelPlaceHolder(placeholder);
  };

  /**
   * 添加 新标签
   */
  const addNewLabel = (continued = false) => {
    addLabel();

    resetLabel(continued ? '' : undefined);
  };

  return {
    data,
    newLabel,
    newLabelPlaceHolder,
    setNewLabel,
    setNewLabelPlaceHolder,

    addNewLabel,
  };
};
