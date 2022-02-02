import type { CSSProperties } from 'react';
import React, { forwardRef, memo, useEffect } from 'react';
import classNames from 'classnames';

import { Handle, Remove } from '../components';

import type { BaseItemProps } from '../types';

import './index.less';

export const Item = memo(
  forwardRef<HTMLLIElement, BaseItemProps>((p, ref) => {
    const {
      color,
      dragOverlay,
      dragging,
      disabled,
      fadeIn,
      handle,
      height,
      index,
      listeners,
      onRemove,
      renderItem,
      sorting,
      style,
      transition,
      transform,
      item,
      wrapperStyle,
      removable,
      onAddItem,
      ...props
    } = p;

    const prefix = 'avx-sortable';

    // 添加 overlay 抓手
    useEffect(() => {
      if (!dragOverlay) {
        return;
      }

      document.body.style.cursor = 'grabbing';

      return () => {
        document.body.style.cursor = '';
      };
    }, [dragOverlay]);

    const containerStyle = {
      ...wrapperStyle,
      transition: [transition, wrapperStyle?.transition]
        .filter(Boolean)
        .join(', '),
      '--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
      '--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
      '--scale-x': transform?.scaleX ? `${transform.scaleX}` : undefined,
      '--scale-y': transform?.scaleY ? `${transform.scaleY}` : undefined,
      '--index': index,
      '--color': color,
    } as CSSProperties;

    return (
      <li
        className={classNames(
          `${prefix}-item-container`,
          fadeIn && `${prefix}-fadeIn`,
          sorting && `${prefix}-sorting`,
          dragOverlay && `${prefix}-dragOverlay`,
        )}
        style={containerStyle}
        ref={ref}
      >
        <div
          className={classNames(
            `${prefix}-item`,
            dragging && `${prefix}-item-dragging`,
            handle && `${prefix}-withHandle`,
            dragOverlay && `${prefix}-item-dragOverlay`,
            disabled && `${prefix}-item-disable`,
            color && `${prefix}-item-color`,
          )}
          style={style}
          {...(!handle ? listeners : undefined)}
          {...props}
          tabIndex={!handle ? 0 : undefined}
        >
          {renderItem ? (
            renderItem(item, {
              dragOverlay: Boolean(dragOverlay),
              dragging: Boolean(dragging),
              sorting: Boolean(sorting),
              index,
              fadeIn: Boolean(fadeIn),
              listeners,
              ref,
              style,
              transform,
              transition,
              onRemove: removable ? onRemove : undefined,
              onAddItem: onAddItem,
            })
          ) : (
            <>
              {item.id}
              <span
                className={`${prefix}-action`}
                onClick={() => {
                  console.log('123');
                }}
              >
                {removable ? (
                  <Remove
                    className={`${prefix}-action-remove`}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                    }}
                    onClick={onRemove}
                  />
                ) : null}
                {handle ? <Handle {...listeners} /> : null}
              </span>
            </>
          )}
        </div>
      </li>
    );
  }),
);
