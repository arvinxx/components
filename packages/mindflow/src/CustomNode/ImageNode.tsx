import type { FC } from 'react';
import React from 'react';

import './ImageNode.less';

export interface ImageNodeProps {
  src?: string;
}

const ImageNode: FC<ImageNodeProps> = ({ src }) => {
  return <img src={src} className="avx-mindflow-node-image" />;
};

export default ImageNode;
