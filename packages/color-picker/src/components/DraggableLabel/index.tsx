import type { CSSProperties, FC } from 'react';
import React, { memo, useEffect, useMemo } from 'react';
import { fromEvent, Subject, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, withLatestFrom, concatMap, takeUntil, map } from 'rxjs/operators';
import cls from 'classnames';

import './index.less';

interface DraggableLabelProps {
  text: string;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
  style?: CSSProperties;
}

const DraggableLabel: FC<DraggableLabelProps> = memo(
  ({ text, onChange, value, className, style }) => {
    const currentValue$ = useMemo(() => new BehaviorSubject(value), []);
    const mouseDown$ = useMemo(() => new Subject(), []);

    useEffect(() => {
      currentValue$.next(value);
    }, [value]);

    useEffect(() => {
      mouseDown$
        .pipe(
          concatMap(() =>
            fromEvent<MouseEvent>(window, 'mousemove').pipe(
              takeUntil(fromEvent(window, 'mouseup')),
            ),
          ),
          map((e) => e.movementX),
          withLatestFrom(currentValue$, (movementX, value) => Math.round(value + movementX)),
          distinctUntilChanged(),
        )
        .subscribe((value) => {
          onChange?.(value);
        });

      return () => {
        mouseDown$.unsubscribe();
      };
    }, []);

    return (
      <div
        className={cls(`avx-color-fields-label`, className)}
        onMouseDown={(e) => {
          mouseDown$.next(e);
        }}
        style={style}
      >
        {text}
      </div>
    );
  },
);

export default DraggableLabel;
