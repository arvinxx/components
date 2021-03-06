/* istanbul ignore file */

import { copySuccess, getImageBase64 } from './helper';
import { copyToClipboard } from './clipboard';
import { svgSize } from './svg-size';

// 放大 8 倍
const SCALE = 8;

const copyImage = (image: HTMLImageElement) => {
  image.onload = async () => {
    const result = await fetch(getImageBase64(image));

    // 如果浏览器支持 navigator.clipboard 接口
    // 就使用 write 接口
    const isSuccess = await copyToClipboard('image/png', await result.blob());

    // 不然就用降级方案
    if (!isSuccess) {
      // 创建 image 对象
      const img = document.createElement('img');
      img.src = getImageBase64(image, SCALE);
      img.contentEditable = 'true';
      document.body.appendChild(img);

      // 复制
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNode(img);
      selection?.removeAllRanges();
      selection?.addRange(range);
      document.execCommand('Copy');
      img.remove();
    }

    copySuccess();
  };
};

/**
 * 复制 Png 到剪切板
 * @param url
 */
export const copyPngFromSvg = async (url: string) => {
  const res = await fetch(url);
  const size = svgSize(await res.clone().text());

  const svgBlob = await res.blob();
  const svgUrl = URL.createObjectURL(svgBlob);

  const image = new Image(size.width * SCALE, size.height * SCALE);
  image.src = svgUrl;

  copyImage(image);
};

/**
 * 纯复制 png
 * @param url
 */
export const copyPng = async (url: string) => {
  const image = new Image();
  const res = await fetch(url);

  const blob = await res.blob();

  image.src = URL.createObjectURL(blob);

  copyImage(image);
};

/**
 * 下载 Png
 * @param url
 * @param title
 */
export const downloadPng = async (url: string, title: string) => {
  const res = await fetch(url);
  const size = svgSize(await res.clone().text());
  const svgBlob = await res.blob();
  const svgUrl = URL.createObjectURL(svgBlob);

  const image = new Image(size.width * SCALE, size.height * SCALE);
  image.src = svgUrl;

  image.onload = () => {
    const a = document.createElement('a');
    a.download = `${title}.png`;
    a.href = getImageBase64(image);
    a.click();
  };
};
