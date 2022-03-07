import type { FC } from 'react';
import React from 'react';

export interface LinkProps {
  link?: string;
}

const UrlNode: FC<LinkProps> = ({ link }) => {
  return <div>{link}</div>;
};

export default UrlNode;
