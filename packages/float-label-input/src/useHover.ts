import { useRef } from 'react';
import type { Input } from 'antd';
import { useSize } from 'ahooks';

export const useHover = () => {
  const inputRef = useRef<Input>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const { height: inputHeight } = useSize(
    inputRef.current && inputRef.current.input,
  );

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
