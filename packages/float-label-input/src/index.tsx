import type { CSSProperties, FC } from 'react';
import type { InputProps } from 'antd/lib/input/Input';

import React, { useState } from 'react';
import { Input } from 'antd';
import cls from 'classnames';

import styles from './style.less';
import { useHover } from './useHover';

export interface FloatLabelInputProps extends InputProps {
  label: string;
  labelClassName?: string;
  hoverClassName?: string;
  error?: boolean;
  errorMsg?: string;
  hoverDistance?: number;
}

const FloatLabelInput: FC<FloatLabelInputProps> = (props) => {
  const [focused, setFocused] = useState(false);

  const { value, label, hoverDistance, hoverClassName } = props;

  const { labelPosition, inputRef, labelRef } = useHover();

  const activeStyle: CSSProperties = {
    transform: `translateY(-${hoverDistance || labelPosition}px)`,
  };

  const style: CSSProperties = {
    marginLeft: 8,
    marginTop: -labelPosition,
  };

  const shouldHover = focused || !!value;
  return (
    <div>
      <Input
        ref={inputRef}
        className={cls(props.className)}
        {...props}
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
      />
      <label
        ref={labelRef}
        style={{
          ...style,
          ...(shouldHover ? activeStyle : {}),
        }}
        className={cls(
          styles.label,
          props.labelClassName,
          shouldHover ? hoverClassName : null,
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatLabelInput;
