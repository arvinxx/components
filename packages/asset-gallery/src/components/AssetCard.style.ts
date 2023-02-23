import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, cx, prefixCls, css }) => {
  const prefix = `${prefixCls}-asset-card`;
  return {
    wrapper: cx(
      `${prefix}-wrapper`,
      css`
        box-sizing: border-box;
        padding: 8px;
        break-inside: avoid;
      `,
    ),
    item: cx(
      `${prefix}-item`,
      css`
        overflow: hidden;
        border-radius: ${token.borderRadius}px;
        box-shadow: ${token.boxShadowTertiary};
      `,
    ),
    link: cx(
      `${prefix}-link`,
      css`
        color: ${token.colorTextTertiary};
        padding: 4px 0;
      `,
    ),

    image: cx(
      `${prefix}-image`,
      css`
        width: 100%;
        height: 100%;
        cursor: pointer;

        .${`${prefix}-image`} {
          &-ctn {
            position: relative;
          }

          &-ctn:hover &-type {
            opacity: 1;
          }

          &-type {
            position: absolute;
            top: 8px;
            opacity: 0;
            z-index: 100;
            left: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            background: ${token.colorBgElevated};
            border-radius: 2px;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16);
          }
        }
      `,
    ),
    imgCtn: cx(
      `${prefix}-image-ctn`,
      css`
        position: relative;

        :hover {
          .${prefix}-image-type {
            opacity: 1;
          }
        }
      `,
    ),
    imgType: cx(
      `${prefix}-image-type`,
      css`
        position: absolute;
        top: 8px;
        opacity: 0;
        z-index: 100;
        left: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background: ${token.colorBgElevated};
        border-radius: 2px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16);
      `,
    ),
  };
});
