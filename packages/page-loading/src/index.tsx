import type { CSSProperties } from 'react';
import React from 'react';
import classNames from 'classnames';

import 'multi-nprogress/nprogress.css';

import { useProgress } from './useProgress';
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
   * 主色
   * @default #1890ff
   */
  color?: string;
  /**
   * 背景颜色
   * @default #f3f4f6
   */
  backgroundColor?: string;

  /**
   * 进度条 id。如果存在多个 PageLoading 组件，需要指定 id 以区分进度条
   */
  id?: string;
}

const PageLoading: React.FC<PageLoadingProps> = ({
  progress,
  fullscreen,
  color = '#1890ff',
  id = 'avx-page-loading-container',
  backgroundColor = '#f5f5f5',
}) => {
  // 控制 Progress 显示
  useProgress(id, color, progress);

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
