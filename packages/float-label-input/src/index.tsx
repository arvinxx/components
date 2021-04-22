import type { CSSProperties, FC, FocusEvent } from 'react';
import React, { useState } from 'react';
import { Input } from 'antd';
import cls from 'classnames';

import useMergeValue from 'use-merge-value';

import './style.less';
import { useHover } from './useHover';

const { TextArea } = Input;

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
  required?: boolean;
  textArea?: boolean;
}

const FloatLabelInput: FC<FloatLabelInputProps> = (props) => {
  const [focused, setFocused] = useState(false);

  const {
    label,
    hoverDistance,
    hoverClassName,
    required,
    textArea,
    ...res
  } = props;

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
  const Component = textArea ? TextArea : Input;

  const shouldHover = focused || !!value;
  return (
    <div className="avx-float-input-container" data-testid="container">
      <Component
        ref={inputRef}
        className={cls(props.className)}
        {...res}
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
          shouldHover ? ['avx-float-input-label-hover', hoverClassName] : null,
        )}
        data-testid="label"
      >
        {label}
        {!required ? null : (
          <span className="avx-float-input-label-required">*</span>
        )}
      </label>
    </div>
  );
};

export default FloatLabelInput;
