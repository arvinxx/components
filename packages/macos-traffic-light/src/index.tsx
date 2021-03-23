import React from 'react';
import type { FC, MouseEvent } from 'react';
import cls from 'classnames';

import CloseIcon from './CloseIcon';
import MaximizeIcon from './MaximizeIcon';
import MinimizeIcon from './MinimizeIcon';

import { useTrafficLight } from './useTrafficLight';

import styles from './style.less';

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
   * 最小大化事件
   */
  maximize?: (event: MouseEvent) => void;

  /**
   * 显示最小化
   * @default true
   */
  showMinimize?: boolean;
  /**
   * 显示最大化
   * @default true
   */
  showMaximize?: boolean;
  /**
   * 禁用最大化
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
      className={styles.container}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      <div
        onClick={close}
        className={cls({
          [styles.close]: true,
          [styles.blur]: !isFocus,
        })}
      >
        {hover ? <CloseIcon /> : null}
      </div>
      {showMinimize ? (
        <div
          onClick={minimize}
          className={cls({
            [styles.minus]: true,
            [styles.blur]: !isFocus,
          })}
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
            [styles.max]: true,
            [styles.blur]: !isFocus,
            [styles.disable]: disableMaximize,
          })}
        >
          {!disableMaximize && hover ? <MaximizeIcon /> : null}
        </div>
      ) : null}
    </div>
  );
};

export default TrafficLight;
