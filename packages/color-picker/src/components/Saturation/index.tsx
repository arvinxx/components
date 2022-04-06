import type { FC } from 'react';
import React, { useEffect, useMemo, useRef } from 'react';
import reactCSS from 'reactcss';

import { fromEvent, Subject } from 'rxjs';
import { concatMap, map, takeUntil, throttleTime } from 'rxjs/operators';
import { useStore } from '../../store';

export const Saturation: FC = () => {
  const hue = useStore((s) => s.hue);
  const saturation = useStore((s) => s.saturation);
  const brightness = useStore((s) => s.brightness);

  const updateBySV = useStore((s) => s.updateBySV);

  const ctnRef = useRef(null);

  const getContainerRenderWindow = () => {
    const container = ctnRef.current;
    let renderWindow = window;

    while (!renderWindow.document.contains(container) && renderWindow.parent !== renderWindow) {
      // @ts-ignore
      renderWindow = renderWindow.parent;
    }
    return renderWindow;
  };

  const mouseDown$ = useMemo(() => new Subject(), []);

  const bindingStart = (e) => {
    mouseDown$.next(e);
  };

  useEffect(() => {
    mouseDown$
      .pipe(
        concatMap(() =>
          fromEvent<MouseEvent>(getContainerRenderWindow(), 'mousemove').pipe(
            takeUntil(fromEvent(getContainerRenderWindow(), 'mouseup')),
          ),
        ),
        map((e: any) => ({
          x: typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX,
          y: typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY,
        })),
        throttleTime(16),
      )
      .subscribe((point) => {
        const container = ctnRef.current;
        const { width: containerWidth, height: containerHeight } =
          container.getBoundingClientRect();

        const left = point.x - (container.getBoundingClientRect().left + window.pageXOffset);
        const top = point.y - (container.getBoundingClientRect().top + window.pageYOffset);

        const saturation = left / containerWidth;
        const bright = 1 - top / containerHeight;

        updateBySV(saturation, bright);
      });
  }, []);

  const styles = reactCSS({
    default: {
      color: {
        // @ts-ignore
        absolute: '0px 0px 0px 0px',
        background: `hsl(${hue},100%, 50%)`,
        borderRadius: 4,
      },
      white: {
        // @ts-ignore
        absolute: '0px 0px 0px 0px',
        borderRadius: 4,
      },
      black: {
        // @ts-ignore
        absolute: '0px 0px 0px 0px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.09), inset 0 0 4px rgba(0,0,0,.15)',
        borderRadius: 4,
      },
      pointer: {
        position: 'absolute',
        top: `${100 - brightness}%`,
        left: `${saturation}%`,
        cursor: 'default',
      },
      circle: {
        width: '4px',
        height: '4px',
        boxShadow: `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
            0 0 1px 2px rgba(0,0,0,.4)`,
        borderRadius: '50%',
        cursor: 'hand',
        transform: 'translate(-2px, -2px)',
      },
    },
  });

  return (
    <div
      style={styles.color}
      ref={ctnRef}
      onMouseDown={bindingStart}
      onTouchMove={bindingStart}
      onTouchStart={bindingStart}
    >
      <style>{`
          .saturation-white {
            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));
            background: linear-gradient(to right, #fff, rgba(255,255,255,0));
          }
          .saturation-black {
            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));
            background: linear-gradient(to top, #000, rgba(0,0,0,0));
          }
        `}</style>
      <div style={styles.white} className="saturation-white">
        <div style={styles.black} className="saturation-black" />
        <div
          // @ts-ignore
          style={styles.pointer}
        >
          <div style={styles.circle} />
        </div>
      </div>
    </div>
  );
};

export default Saturation;
