import { useRef } from 'react';
import { useSize } from 'ahooks';
import type { InputRef } from 'antd';

export const useHover = () => {
  const inputRef = useRef<InputRef>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const { height: inputHeight } = useSize(inputRef.current && inputRef.current.input);

  let baseGap = 8;
  const { height: labelHeight } = useSize(labelRef);
  let isReady = true;

  if (!inputHeight || !labelHeight) {
    isReady = false;
  } else {
    baseGap = (inputHeight - labelHeight) / 2;
  }

  return {
    inputRef,
    labelRef,
    isReady,
    baseGap,
    labelPosition: isReady ? labelHeight! + baseGap : 26,
  };
};
