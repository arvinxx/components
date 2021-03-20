import type { CSSProperties, FC } from 'react';
import React from 'react';

import './Square.less';

export interface SquareProps {
  /**
   * 主色(可选)
   * @default #1890ff
   */
  color?: string;
}

const Square: FC<SquareProps> = ({ color = '#1890ff' }) => {
  const colorStyle: CSSProperties = { background: color };

  return (
    <div className="avx-preloader-square-container">
      <div className="avx-preloader-square-item" style={colorStyle} />
      <div
        className="avx-preloader-square-item avx-preloader-square-animation-delay"
        style={colorStyle}
      />
      <div
        className="avx-preloader-square-item avx-preloader-square-animation-delay"
        style={colorStyle}
      />
      <div className="avx-preloader-square-item" style={colorStyle} />
    </div>
  );
};

export default Square;
