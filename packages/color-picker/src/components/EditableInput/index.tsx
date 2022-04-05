import type { CSSProperties, FC } from 'react';
import React from 'react';
import cls from 'classnames';

import './index.less';

export interface EditableInputProps {
  value: number | string;

  onChange: (value) => void;
  className?: string;
  style?: CSSProperties;
}

const EditableInput: FC<EditableInputProps> = ({ value, style, className, onChange }) => {
  return (
    <input
      className={cls('avx-color-fields-input', className)}
      value={value}
      // onKeyDown={this.handleKeyDown}
      // onChange={this.handleChange}
      onChange={onChange}
      // onBlur={this.handleBlur}
      spellCheck="false"
      style={style}
    />
  );
};

export default EditableInput;
