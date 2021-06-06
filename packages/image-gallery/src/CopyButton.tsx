import React from 'react';
import { Button, Tooltip } from 'antd';

const CopyButton = ({ onClick, tooltip, content }) => {
  return (
    <Tooltip title={tooltip}>
      <Button
        type={'link'}
        className="avx-image-gallery-link"
        onClick={onClick}
      >
        {content}
      </Button>
    </Tooltip>
  );
};

export default CopyButton;
