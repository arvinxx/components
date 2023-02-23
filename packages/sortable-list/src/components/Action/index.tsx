import type { CSSProperties, FC } from 'react';
import React from 'react';
import { useStyles } from './style';

export interface ActionProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: {
    fill: string;
    background: string;
  };
  cursor?: CSSProperties['cursor'];
}

export const Action: FC<ActionProps> = ({ active, className, cursor, style, ...props }) => {
  const { styles, cx } = useStyles();
  return (
    <button
      type={'button'}
      {...props}
      className={cx(styles.action, className)}
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
};
