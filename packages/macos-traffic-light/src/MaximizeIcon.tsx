import React from 'react';
import type { FC } from 'react';
import './icon.less';

const MaximizeIcon: FC = () => {
  return (
    <svg
      className="avx-traffic-light-icon"
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="maximize-icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.45679 0.869873L5.16357 4.23975C5.48486 4.53174 6 4.30371 6 3.86963V0.5C6 0.223877 5.77612 0 5.5 0H1.79321C1.33618 0 1.11865 0.5625 1.45679 0.869873ZM0.853516 1.85352L4.14648 5.14648C4.46143 5.46143 4.23828 6 3.79297 6H0.5C0.223877 6 0 5.77612 0 5.5V2.20703C0 1.76172 0.538574 1.53857 0.853516 1.85352Z"
      />
    </svg>
  );
};

export default MaximizeIcon;
