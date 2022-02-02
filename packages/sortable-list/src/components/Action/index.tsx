import type { CSSProperties, FC } from 'react';
import React from 'react';
import classNames from 'classnames';

import styles from './index.less';

export interface ActionProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: {
    fill: string;
    background: string;
  };
  cursor?: CSSProperties['cursor'];
}

export const Action: FC<ActionProps> = ({
  active,
  className,
  cursor,
  style,
  ...props
}) => (
  <button
    {...props}
    className={classNames(styles.Action, className)}
    tabIndex={0}
    style={
      {
        ...style,
        cursor,
        '--fill': active?.fill,
        '--background': active?.background,
      } as CSSProperties
    }
  />
);
