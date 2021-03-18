import type { FC } from 'react';
import { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useMindflowService } from '../../store/useMindflowContext';
import './style.less';

interface CollapseIconProps {
  id: string;
  collapsed: boolean;
  color: string;
}

const CollapseIcon: FC<CollapseIconProps> = ({ id, collapsed, color }) => {
  const [isHovered, setHovered] = useState(false);
  const { toggleNodeCollapsed } = useMindflowService();

  return (
    <div
      className="mind-node-collapse"
      style={{
        borderColor: color,
        background: isHovered ? color : 'white',
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onClick={() => {
        toggleNodeCollapsed(id);
      }}
    >
      <div
        className="mind-node-collapse-icon"
        style={{ color: isHovered ? '#fff' : color }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onClick={() => {
          console.log('icon');
        }}
      >
        {collapsed ? (
          <PlusOutlined
            onMouseEnter={() => {
              setHovered(true);
            }}
            onClick={() => {
              console.log('svg');
            }}
          />
        ) : (
          <MinusOutlined
            onMouseEnter={() => {
              setHovered(true);
            }}
            onClick={() => {
              console.log('svg');
            }}
          />
        )}
      </div>
    </div>
  );
};
export default CollapseIcon;
