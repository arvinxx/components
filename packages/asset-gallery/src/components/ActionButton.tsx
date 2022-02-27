import type { FC } from 'react';
import React from 'react';
import type { ButtonProps } from 'antd';
import { Button, Tooltip } from 'antd';

export interface ActionButtonProps {
  onClick: ButtonProps['onClick'];
  tooltip?: string;
  content?: string;
  icon?: string;
}

const ActionButton: FC<ActionButtonProps> = ({
  icon,
  onClick,
  tooltip,
  content,
}) => {
  return (
    <Tooltip title={tooltip}>
      <Button
        type={'link'}
        className="avx-asset-card-link"
        onClick={onClick}
        icon={icon ? <img src={icon} alt={content} /> : undefined}
      >
        {content}
      </Button>
    </Tooltip>
  );
};

export default ActionButton;
