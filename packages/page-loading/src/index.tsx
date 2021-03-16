import type { CSSProperties, FC } from 'react';
import React from 'react';
import classNames from 'classnames';

import 'multi-nprogress/nprogress.css';

import { useProgress } from './useProgress';
import './style.less';

const clsPrefix = 'avx-page-loading';

export interface PageLoadingProps {
  /**
   * 是否全屏(可选)
   * @default false
   */
  fullscreen?: boolean;

  /**
   * 显示加载进度条(可选)
   * @default true
   */
  progress?: boolean;

  /**
   * 主色(可选)
   * @default #1890ff
   */
  color?: string;
  /**
   * 背景颜色(可选)
   * @default #f3f4f6
   */
  backgroundColor?: string;

  /**
   * 进度条 id。(可选)
   * 如果存在多个 PageLoading 组件，需要指定 id 以区分进度条
   *
   */
  id?: string;

  /**
   * 加载状态
   */
  loading?: boolean;
}

const PageLoading: FC<PageLoadingProps> = ({
  progress = true,
  fullscreen,
  color = '#1890ff',
  id = 'avx-page-loading-container',
  backgroundColor = '#f5f5f5',
  loading = true,
  children,
}) => {
  // 控制 Progress 显示
  useProgress(id, { color, progress, loading, fullscreen });

  const colorStyle: CSSProperties = { background: color };

  // 如果明确指定了 loading 为 false
  // 返回 children
  if (typeof loading === 'boolean' && !loading) return <>{children}</>;

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
