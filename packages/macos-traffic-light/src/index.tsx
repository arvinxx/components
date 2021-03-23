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
  close?: (event: MouseEvent) => void;
  /**
   * 最小化事件
   */
  minimize?: (event: MouseEvent) => void;
  /**
   * 显示最小化图标
   * @default true
   */
  showMinimize?: boolean;
  /**
   * 最大化事件
   */
  maximize?: (event: MouseEvent) => void;
  /**
   * 显示最大化图标
   * @default true
   */
  showMaximize?: boolean;
  /**
   * 禁用最大化交互
   * @default false
   */
  disableMaximize?: boolean;
}

const TrafficLight: FC<TrafficLightProps> = ({
  close,
  minimize,
  maximize,
  showMinimize = true,
  showMaximize = true,
  disableMaximize,
}) => {
  const { hover, isFocus, hoverOff, hoverOn } = useTrafficLight();
  return (
    <div
      className="avx-traffic-light-container"
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      data-testid="container"
    >
      <div
        onClick={close}
        className={cls({
          'avx-traffic-light-close': true,
          'avx-traffic-light-blur': !isFocus,
        })}
        data-testid="close"
      >
        {hover ? <CloseIcon /> : null}
      </div>
      {showMinimize ? (
        <div
          onClick={minimize}
          className={cls({
            'avx-traffic-light-minus': true,
            'avx-traffic-light-blur': !isFocus,
          })}
          data-testid="minimize"
        >
          {hover ? <MinimizeIcon /> : null}
        </div>
      ) : null}
      {showMaximize ? (
        <div
          onClick={(e) => {
            if (disableMaximize) return;
            maximize(e);
          }}
          className={cls({
            'avx-traffic-light-max': true,
            'avx-traffic-light-blur': !isFocus,
            'avx-traffic-light-disable': disableMaximize,
          })}
          data-testid="maximize"
        >
          {!disableMaximize && hover ? <MaximizeIcon /> : null}
        </div>
      ) : null}
    </div>
  );
};

export default TrafficLight;
