import React from 'react';
import type { FC } from 'react';

import './style.less';

interface InPortProps {
  color: string;
}

export const InPort: FC<InPortProps> = ({ color }) => {
  return (
    <div
      style={{
        borderColor: color,
      }}
      className="mind-port-in-port"
    />
  );
};
