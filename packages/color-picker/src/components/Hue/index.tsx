import type { FC } from 'react';
import React, { memo, useEffect, useMemo, useRef } from 'react';
import reactCSS from 'reactcss';

import { fromEvent, Subject } from 'rxjs';
import { concatMap, map, takeUntil } from 'rxjs/operators';

import { useStore } from '../../store';

import './style.less';

const Hue: FC = memo(() => {
  const hue = useStore((s) => s.hue);

  const updateHue = useStore((s) => s.updateHue);

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

        const percent = (left * 100) / containerWidth;

        updateHue(Math.round((percent / 100) * 360));
      });
  }, []);

  const styles = reactCSS({
    default: {
      hue: {
        // @ts-ignore
        absolute: '0px 0px 0px 0px',
        borderRadius: 2,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)',
      },
      container: {
        padding: '0 2px',
        position: 'relative',
        height: '100%',
        borderRadius: 2,
      },
      pointer: {
        position: 'absolute',
        left: `${(hue / 360) * 100}%`,
      },
      slider: {
        marginTop: '1px',
        width: '4px',
        borderRadius: '1px',
        height: '8px',
        boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
        background: '#fff',
        transform: 'translateX(-2px)',
      },
    },
  });

  return (
    <div style={styles.hue}>
      <div
        className={'hue-horizontal'}
        // @ts-ignore
        style={styles.container}
        ref={ctnRef}
        onMouseDown={bindingStart}
        onTouchMove={bindingStart}
        onTouchStart={bindingStart}
      >
        <div
          // @ts-ignore
          style={styles.pointer}
        >
          <div style={styles.slider} />
        </div>
      </div>
    </div>
  );
});

export default Hue;
