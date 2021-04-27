/* istanbul ignore file */

// import { copyToClipboard } from './clipboard';
import { message } from 'antd';

/**
 * 复制 SVG
 * @param url
 */
export const copySVG = async (url: string) => {
  const res = await fetch(url);
  // const svgBlob = await res.text();
  // console.log(svgBlob);
  // 如果浏览器支持 navigator.clipboard 接口
  // 就使用 write 接口
  // const isSuccess = await copyToClipboard('text/plain', new Blob([svgBlob], { type: 'text/plain' }));

  // if (!isSuccess) {
  const svgString = await res.text();
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.setAttribute('value', svgString);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  // }

  message.success('🎉 复制成功!');
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
