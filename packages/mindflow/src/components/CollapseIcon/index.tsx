import React from 'react';
import type { FC } from 'react';
import { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useUnfoldedList } from '../../store/globalStore';
import './style.less';

interface CollapseIconProps {
  id: string;
  collapsed: boolean;
  color: string;
}

const CollapseIcon: FC<CollapseIconProps> = ({ id, collapsed, color }) => {
  const [isHovered, setHovered] = useState(false);
  const toggleNodeCollapsed = useUnfoldedList((state) => state.toggleItem);

  return (
    <div
      className="mind-node-collapse"
      data-testid="icon"
      style={{
        borderColor: color,
        background: isHovered ? color : 'white',
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => {
        /* istanbul ignore next */
        toggleNodeCollapsed(id);
      }}
    >
      <div
        className="mind-node-collapse-icon"
        style={{ color: isHovered ? '#fff' : color }}
      >
        {collapsed ? <PlusOutlined /> : <MinusOutlined />}
      </div>
    </div>
  );
};
export default CollapseIcon;
