/* istanbul ignore file */

/**
 * 利用 Canvas 生成 png dataURL
 * @param image
 * @param scale 缩放
 */
export const getImageBase64 = (image: HTMLImageElement, scale = 1) => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.width = image.width * scale;
  canvas.height = image.height * scale;

  const context = canvas.getContext('2d');
  context?.drawImage(image, 0, 0);

  return canvas.toDataURL('image/png');
};
