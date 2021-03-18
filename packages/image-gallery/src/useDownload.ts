import { getImageBase64 } from './utils';

export const useDownload = () => {
  /**
   * 下载 SVG
   * @param url
   * @param title
   */
  const downloadSVG = async (url: string, title: string) => {
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
  const downloadPng = async (url: string, title: string) => {
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

  return { downloadSVG, downloadPng };
};
