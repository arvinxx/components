import React from 'react';
import type { FC, MouseEvent } from 'react';
import cls from 'classnames';

import CloseIcon from './CloseIcon';
import MaximizeIcon from './MaximizeIcon';
import MinimizeIcon from './MinimizeIcon';

import { useTrafficLight } from './useTrafficLight';

import './style.less';

interface TrafficLightProps {
  /**
   * 关闭事件
   */
  onClose?: (event: MouseEvent) => void;
  /**
   * 最小化事件
   */
  onMinimize?: (event: MouseEvent) => void;
  /**
   * 显示最小化图标
   * @default true
   */
  minimizable?: boolean;
  /**
   * 最大化事件
   */
  onMaximize?: (event: MouseEvent) => void;
  /**
   * 显示最大化图标
   * @default true
   */
  maximizable?: boolean;
  /**
   * 禁用最大化交互
   * @default false
   */
  disableMaximize?: boolean;
}

const TrafficLight: FC<TrafficLightProps> = ({
  onClose,
  onMinimize,
  onMaximize,
  minimizable = true,
  maximizable = true,
  disableMaximize,
}) => {
  const { hover, isFocus, hoverOff, hoverOn } = useTrafficLight();

  // 当没有 hover 且没 focus 时为 blur 状态
  const isBlur = !hover && !isFocus;
  return (
    <div
      className="avx-traffic-light-container"
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      data-testid="container"
    >
      <div
        onClick={onClose}
        className={cls({
          'avx-traffic-light-close': true,
          'avx-traffic-light-blur': isBlur,
        })}
        data-testid="onClose"
      >
        {hover ? <CloseIcon /> : null}
      </div>
      {minimizable ? (
        <div
          onClick={onMinimize}
          className={cls({
            'avx-traffic-light-minus': true,
            'avx-traffic-light-blur': isBlur,
          })}
          data-testid="onMinimize"
        >
          {hover ? <MinimizeIcon /> : null}
        </div>
      ) : null}
      {maximizable ? (
        <div
          onClick={(e) => {
            if (disableMaximize) return;
            onMaximize?.(e);
          }}
          className={cls({
            'avx-traffic-light-max': true,
            'avx-traffic-light-blur': isBlur,
            'avx-traffic-light-disable': disableMaximize,
          })}
          data-testid="onMaximize"
        >
          {!disableMaximize && hover ? <MaximizeIcon /> : null}
        </div>
      ) : null}
    </div>
  );
};

export default TrafficLight;
