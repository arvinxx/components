/* istanbul ignore file */
import { message } from 'antd';

/**
 * 利用 Canvas 生成 png dataURL
 * @param image
 * @param scale 缩放
 */
const getImageBase64 = (image: HTMLImageElement, scale = 8) => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.width = image.width * scale;
  canvas.height = image.height * scale;

  const context = canvas.getContext('2d');
  context?.drawImage(image, 0, 0);

  return canvas.toDataURL('image/png');
};

/**
 * 复制 Png 到剪切板
 * @param url
 */
export const copyPngFromSvg = async (url: string) => {
  const res = await fetch(url);
  const svgBlob = await res.blob();
  const svgUrl = URL.createObjectURL(svgBlob);

  const image = new Image();
  image.src = svgUrl;

  image.onload = async () => {
    const { state } = await navigator.permissions.query({
      name: 'clipboard-write',
    });

    // 如果浏览器支持 navigator.clipboard 接口
    // 就使用 write 接口
    if (navigator.clipboard && state === 'granted') {
      const result = await fetch(getImageBase64(image, 1));
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': await result.blob() }),
      ]);
    }
    // 不然就用降级方案
    else {
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
    }

    message.success('🎉 复制成功!');
  };
};

/**
 * 复制 SVG
 * @param url
 */
export const copySVG = async (url: string) => {
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

/**
 * 下载 SVG
 * @param url
 * @param title
 */
export const downloadSVG = async (url: string, title: string) => {
  const res = await fetch(url);
  const svgBlob = await res.blob();

  const filename = `${title}.svg`;

  const a = document.createElement('a');
  document.body.appendChild(a); // 兼容火狐，将a标签添加到body当中

  a.href = URL.createObjectURL(svgBlob);

  a.download = filename;
  a.target = '_blank'; // a标签增加target属性
  a.click();
  a.remove(); // 移除a标签
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
    a.href = getImageBase64(image);
    a.click();
  };
};
