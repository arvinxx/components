import type { CSSProperties, FC } from 'react';
import React, { useEffect, useState } from 'react';
import cls from 'classnames';

import './index.less';

export interface EditableInputProps {
  value: number | string;

  onChange: (value) => void;
  className?: string;
  style?: CSSProperties;
}

const EditableInput: FC<EditableInputProps> = ({ value, style, className, onChange }) => {
  const [internalValue, setValue] = useState<string | number>();

  useEffect(() => {
    setValue(value);
  }, [value]);

  const handleBlur = () => {
    onChange(internalValue);
  };

  return (
    <input
      className={cls('avx-color-fields-input', className)}
      value={internalValue}
      // onKeyDown={this.handleKeyDown}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleBlur}
      spellCheck="false"
      style={style}
    />
  );
};

export default EditableInput;
