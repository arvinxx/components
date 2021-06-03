/* istanbul ignore file */

import { copySuccess, getImageBase64 } from './helper';
import { copyToClipboard } from './clipboard';
import { svgSize } from './svg-size';

// 放大 8 倍
const SCALE = 8;

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
 * 下载 Png
 * @param url
 * @param title
 */
export const downloadPng = async (url: string, title: string) => {
  const res = await fetch(url);
  const svgBlob = await res.blob();
  const svgUrl = URL.createObjectURL(svgBlob);

  const image = new Image();
  image.src = svgUrl;

  image.onload = () => {
    const a = document.createElement('a');
    a.download = `${title}.png`;
    a.href = getImageBase64(image, SCALE);
    a.click();
  };
};
