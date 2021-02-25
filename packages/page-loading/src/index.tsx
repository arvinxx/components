import type { CSSProperties } from 'react';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { insertCss } from 'insert-css';

import 'nprogress/nprogress.css';

import { useProgress, progressColor } from './useProgress';
import './style.less';

const clsPrefix = 'avx-page-loading';

export interface PageLoadingProps {
  /**
   * 是否全屏
   * @default false
   */
  fullscreen?: boolean;

  /**
   * 是否显示加载进度条
   * @default true
   */
  progress?: boolean;

  /**
   * 加载的颜色
   * @default #1890ff
   */
  color?: string;
  /**
   * 背景颜色
   * @default #f3f4f6
   */
  backgroundColor?: string;

  /**
   * 该组件的 id
   */
  id?: string;
}

const PageLoading: React.FC<PageLoadingProps> = ({
  progress,
  fullscreen,
  color = '#1890ff',
  id = 'avx-page-loading-container',
  backgroundColor = '#f3f4f6',
}) => {
  // 控制 progress 颜色
  useEffect(() => {
    insertCss(progressColor(color));
  }, [color]);

  // 控制 Progress 显示
  useProgress(id, progress);

  const colorStyle: CSSProperties = { background: color };

  return (
    <div
      id={id}
      className={classNames(
        `${clsPrefix}-container`,
        fullscreen ? `${clsPrefix}-fullscreen` : null,
      )}
      style={{ background: backgroundColor }}
    >
      <div className={`${clsPrefix}-content`}>
        <div className={`${clsPrefix}-item`} style={colorStyle} />
        <div
          className={classNames(
            `${clsPrefix}-item`,
            `${clsPrefix}-animation-delay`,
          )}
          style={colorStyle}
        />
        <div
          className={classNames(
            `${clsPrefix}-item`,
            `${clsPrefix}-animation-delay`,
          )}
          style={colorStyle}
        />
        <div className={`${clsPrefix}-item`} style={colorStyle} />
      </div>
    </div>
  );
};
export default PageLoading;
