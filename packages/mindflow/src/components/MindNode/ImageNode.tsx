import type { FC } from 'react';
import React from 'react';

import './ImageNode.less';

interface ImageNodeProps {
  src?: string;
}

const ImageNode: FC<ImageNodeProps> = ({ src }) => {
  return <img src={src} className="mind-node-image" />;
};

export default ImageNode;
