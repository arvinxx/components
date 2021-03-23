import type { FC } from 'react';
import './icon.less';

const MinimizeIcon: FC = () => {
  return (
    <svg
      className="avx-traffic-light-icon"
      width="8"
      height="2"
      viewBox="0 0 8 2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2L0 2L0 0L8 0V2Z" />
    </svg>
  );
};

export default MinimizeIcon;
