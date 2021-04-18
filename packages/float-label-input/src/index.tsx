import type { CSSProperties, FC, FocusEvent } from 'react';
import React, { useState } from 'react';
import { Input } from 'antd';
import cls from 'classnames';

import useMergeValue from 'use-merge-value';

import './style.less';
import { useHover } from './useHover';

export interface FloatLabelInputProps {
  label: string;
  labelClassName?: string;
  hoverClassName?: string;
  hoverDistance?: number;
  value?: string;
  onChange?: (value?: string) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  className?: string;
  style?: CSSProperties;
}

const FloatLabelInput: FC<FloatLabelInputProps> = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, hoverDistance, hoverClassName } = props;

  const [value, setValue] = useMergeValue(props.value, {
    onChange: props.onChange,
  });
  const { labelPosition, inputRef, labelRef } = useHover();

  const activeStyle: CSSProperties = {
    transform: `translateY(-${(hoverDistance || labelPosition) + 2}px)`,
  };

  const style: CSSProperties = {
    marginLeft: 8,
    marginTop: -labelPosition,
  };

  const shouldHover = focused || !!value;
  return (
    <div className="avx-float-input-container" data-testid="container">
      <Input
        ref={inputRef}
        className={cls(props.className)}
        {...props}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={(e) => {
          setFocused(false);

          if (props.onBlur) {
            props.onBlur(e);
          }
        }}
        onFocus={(e) => {
          setFocused(true);

          if (props.onFocus) {
            props.onFocus(e);
          }
        }}
        data-testid="input"
      />
      <label
        ref={labelRef}
        style={{
          ...style,
          ...(shouldHover ? activeStyle : {}),
        }}
        className={cls(
          'avx-float-input-label',
          props.labelClassName,
          shouldHover ? hoverClassName : null,
        )}
        data-testid="label"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatLabelInput;
