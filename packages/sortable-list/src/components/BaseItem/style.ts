import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, prefixCls, css, cx }) => {
  const prefix = `${prefixCls}-sortable`;
  const boxShadowBorder = `0 0 0 calc(1px / var(--scale-x, 1)) hsla(240, 0%, 26%, 0.05)`;
  const boxShadowCommon = `0 1px calc(3px / var(--scale-x, 1)) hsla(240, 0%, 22%, 0.15)`;
  const boxShadow = `${boxShadowBorder}, ${boxShadowCommon}`;

  return {
    container: cx(
      `${prefix}-item-container`,
      css`
        display: flex;
        box-sizing: border-box;
        transform: translate3d(var(--translate-x, 0), var(--translate-y, 0), 0)
          scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1));
        transform-origin: 0 0;
        touch-action: manipulation;
      `,
    ),
    fadeIn: cx(
      `${prefix}-fadeIn`,
      css`
        animation: fadeIn 500ms ease;

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `,
    ),
    dragOverlay: cx(
      `${prefix}-dragOverlay`,
      css`
        --scale: 1.05;
        --box-shadow: ${boxShadow};
        --box-shadow-picked-up: ${boxShadowBorder}, -1px 0 15px 0 rgba(34, 33, 81, 0.01),
          0px 15px 15px 0 rgba(34, 33, 81, 0.25);
        z-index: 999;
      `,
    ),
    item: cx(
      `${prefix}-item`,
      css`
        &.${prefix}-item {
          position: relative;
          display: flex;
          flex-grow: 1;
          align-items: center;
          box-sizing: border-box;
          padding: 16px 24px;
          list-style: none;
          background-color: ${token.colorBgContainer};
          border-radius: 4px;
          outline: none;
          box-shadow: ${boxShadow};

          transform: scale(var(--scale, 1));
          transform-origin: 50% 50%;
          transition: box-shadow 200ms ease-in-out;

          &:hover {
            .${prefix}-action-remove {
              visibility: visible;
            }
          }

          &:not(.${prefix}-withHandle) {
            cursor: grab;
            touch-action: manipulation;
          }
        }

        .${prefix}-item {
          &-dragging:not(&-dragOverlay) {
            z-index: 0;
            opacity: var(--dragging-opacity, 0.5);

            &:focus {
              box-shadow: ${boxShadow};
            }
          }

          &-disabled {
            color: ${token.colorTextDisabled};
            background-color: ${token.colorBgContainerDisabled};
            cursor: not-allowed;
            &:focus {
              box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1), ${boxShadow};
            }
          }

          &-dragOverlay {
            color: ${token.colorText};
            box-shadow: var(--box-shadow-picked-up);
            transform: scale(var(--scale));
            cursor: inherit;
            opacity: 1;
            animation: pop 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);
          }

          &-color:before {
            position: absolute;
            top: 50%;
            left: 0;
            display: block;
            width: 3px;
            height: 100%;
            background-color: var(--color);
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            transform: translateY(-50%);
            content: '';
          }

          @keyframes pop {
            0% {
              box-shadow: var(--box-shadow);
              transform: scale(1);
            }
            100% {
              box-shadow: var(--box-shadow-picked-up);
              transform: scale(var(--scale));
            }
          }
        }
      `,
    ),
    action: cx(
      `${prefix}-action`,
      css`
        display: flex;
        align-self: flex-start;
        margin: -12px -10px -15px auto;

        .${prefix}-action-remove {
          visibility: hidden;
        }
      `,
    ),
  };
});
