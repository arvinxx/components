import type { FC } from 'react';
import React from 'react';

import './Section.less';

interface StageProps {
  height?: number;
}
const Section: FC<StageProps> = ({ children, height }) => {
  return (
    <div className="avx-journey-map-section" style={{ height }}>
      <div className="avx-journey-map-section-text">{children}</div>
    </div>
  );
};

export default Section;
