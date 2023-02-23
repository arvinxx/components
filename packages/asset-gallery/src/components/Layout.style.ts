import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ prefixCls, cx, css }) => {
  const prefix = `${prefixCls}-asset-gallery`;
  return {
    container: cx(`${prefix}-container`),
    grid: cx(
      `${prefix}-grid`,
      css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      `,
    ),
    masonry: cx(
      `${prefix}-masonry`,
      css`
        column-count: 4;
        column-gap: 0;

        @media (max-width: 400px) {
          column-count: 2;
        }

        @media (max-width: 1200px) {
          column-count: 3;
        }
      `,
    ),
  };
});
