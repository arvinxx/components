import { message } from 'antd';
import { getImageBase64 } from './utils';

export const useCopy = () => {
  /**
   * 复制 Png 到剪切板
   * @param url
   */
  const copyPng = async (url: string) => {
    const res = await fetch(url);
    const svgBlob = await res.blob();
    const svgUrl = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.src = svgUrl;

    image.onload = () => {
      // 创建 image 对象
      const img = document.createElement('img');
      img.src = getImageBase64(image);
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

      message.success('🎉 复制成功!');
    };
  };

  /**
   * 复制 SVG
   * @param url
   */
  const copySVG = async (url: string) => {
    const res = await fetch(url);
    const svgString = await res.text();

    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', svgString);
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      message.success('🎉 复制成功!');
    }
    document.body.removeChild(input);
  };

  return { copyPng, copySVG };
};
