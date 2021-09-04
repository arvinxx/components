import React, { FC } from 'react';
import { Button, ButtonProps, Tooltip } from 'antd';

export interface LayoutButtonProps {
  onClick: ButtonProps['onClick'];
  tooltip: string;
  isActive: boolean;
  icon: {
    default: string;
    active: string;
  };
  testId?: string;
}

const LayoutButton: FC<LayoutButtonProps> = ({
  icon,
  onClick,
  tooltip,
  isActive,
  testId,
}) => {
  return (
    <Tooltip title={tooltip}>
      <Button
        type={'link'}
        onClick={onClick}
        icon={
          <img
            src={isActive ? icon.active : icon.default}
            alt={tooltip}
            style={{ cursor: 'pointer' }}
          />
        }
        data-testid={testId}
      />
    </Tooltip>
  );
};

export default LayoutButton;
