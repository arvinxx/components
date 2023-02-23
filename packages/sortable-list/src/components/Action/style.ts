import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => ({
  action: css`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    width: 12px;
    padding: 15px;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: var(--cursor, pointer);
    appearance: none;
    touch-action: none;
    -webkit-tap-highlight-color: transparent;

    @media (hover: hover) {
      &:hover {
        background-color: var(--action-background, rgba(0, 0, 0, 0.05));

        svg {
          fill: #6f7b88;
        }
      }
    }

    svg {
      flex: 0 0 auto;
      height: 100%;
      margin: auto;
      overflow: visible;
      fill: ${token.colorTextTertiary};
    }

    &:active {
      background-color: var(--background, ${token.colorFillTertiary});

      svg {
        fill: var(--fill, ${token.colorTextSecondary});
      }
    }
  `,
}));
