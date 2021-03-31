import type { FC } from 'react';
import React from 'react';

import './Stage.less';

interface StageProps {
  height: number;
}
const Stage: FC<StageProps> = ({ children, height }) => {
  return (
    <div className="avx-journal-map-stage" style={{ height }}>
      <div className="avx-journal-map-stage-text">{children}</div>
    </div>
  );
};

export default Stage;
