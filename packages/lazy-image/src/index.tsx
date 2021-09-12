import React from 'react';
import type { FC, ImgHTMLAttributes } from 'react';
import { SimpleImg } from 'react-simple-img';

interface ILazyImage {
  src: string;
  preSrc: string;
  palette?: string[];
}

type AdaptiveImage = string | ILazyImage;

export interface LazyImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'placeholder'> {
  src: AdaptiveImage;
  height?: number | string;
  width?: number | string;
  placeholder?: string | boolean;
}

const LazyImage: FC<LazyImageProps> = ({
  src,
  placeholder,
  sizes,
  ...props
}) => {
  if (typeof src === 'string') {
    return (
      <SimpleImg
        placeholder={placeholder || false}
        src={src}
        sizes={sizes}
        {...props}
      />
    );
  }

  // 如果 src 是 lqip-loader 图片
  return <SimpleImg placeholder={src.preSrc} src={src.src} {...props} />;
};
export default LazyImage;
