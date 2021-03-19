import React from 'react';
import type { FC } from 'react';

import './style.less';

import CollapseIcon from '../CollapseIcon';

interface OutPortProps {
  color: string;
  collapsed: boolean;
  id: string;
}

export const OutPort: FC<OutPortProps> = ({
  color,
  collapsed,

  id,
}) => {
  return (
    <div className="mind-port-out-port">
      <CollapseIcon id={id} color={color} collapsed={collapsed} />
    </div>
  );
};
