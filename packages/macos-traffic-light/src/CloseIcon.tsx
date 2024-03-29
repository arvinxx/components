import styled from '@emotion/styled';
import type { FC } from 'react';

const CloseIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`avx-traffic-light-icon ${className}`}
      width="6"
      height="6"
      viewBox="0 0 6 6"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="close-icon"
      fill={'currentColor'}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.157283 0.151369C0.365251 -0.0521572 0.70045 -0.050193 0.905971 0.155756L3 2.25414L5.09403 0.155756C5.29955 -0.050193 5.63475 -0.0521572 5.84272 0.151369C6.05069 0.354895 6.05267 0.686839 5.84715 0.892788L3.74431 3L5.84715 5.10721C6.05267 5.31316 6.05069 5.64511 5.84272 5.84863C5.63475 6.05216 5.29955 6.05019 5.09403 5.84424L3 3.74586L0.905971 5.84424C0.70045 6.05019 0.365251 6.05216 0.157283 5.84863C-0.0506851 5.64511 -0.0526685 5.31316 0.152853 5.10721L2.25569 3L0.152853 0.892788C-0.0526685 0.686839 -0.0506851 0.354895 0.157283 0.151369Z"
      />
    </svg>
  );
};

export default styled(CloseIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: rgba(0, 0, 0, 0.65);
  fill: rgba(0, 0, 0, 0.65);
` as any;
