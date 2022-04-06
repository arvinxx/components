import type { FC } from 'react';
import React, { memo, useEffect, useMemo, useRef } from 'react';

import { concatMap, map, takeUntil } from 'rxjs/operators';

import Checkboard from '../common/Checkboard';
import { useStore } from '../../store';

import styles from './style.less';
import { fromEvent, Subject } from 'rxjs';

const Alpha: FC = memo(() => {
  const rgb = useStore((s) => s.colorModel.rgb());
  const alpha = useStore((s) => s.colorModel.alpha());
  const updateAlpha = useStore((s) => s.updateAlpha);

  const ctnRef = useRef(null);

  const mouseDown$ = useMemo(() => new Subject(), []);

  const bindingStart = (e) => {
    mouseDown$.next(e);
  };

  useEffect(() => {
    mouseDown$
      .pipe(
        concatMap(() =>
          fromEvent<MouseEvent>(window, 'mousemove').pipe(takeUntil(fromEvent(window, 'mouseup'))),
        ),
        map((e: any) => (typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX) as number),
      )
      .subscribe((value) => {
        const container = ctnRef.current;
        const containerWidth = container.clientWidth;

        const left = value - (container.getBoundingClientRect().left + window.pageXOffset);

        updateAlpha(Math.round((left * 100) / containerWidth));
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboard}>
        <Checkboard />
      </div>
      <div
        className={styles.background}
        style={{
          background: `linear-gradient(to right, rgba(${rgb.join(',')}, 0) 0%,
           rgba(${rgb.join(',')}, 1) 100%)`,
        }}
      />
      <div
        className={styles.container}
        ref={ctnRef}
        onMouseDown={bindingStart}
        onTouchMove={bindingStart}
        onTouchStart={bindingStart}
      >
        <div
          style={{
            position: 'absolute',
            left: `${alpha * 100}%`,
          }}
        >
          <div className={styles.slider} />
        </div>
      </div>
    </div>
  );
});

export default Alpha;
