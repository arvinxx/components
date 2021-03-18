/**
 * 利用 Canvas 生成 png dataURL
 * @param image
 */
export const getImageBase64 = (image: HTMLImageElement) => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.width = image.width * 8;
  canvas.height = image.height * 8;

  const context = canvas.getContext('2d');
  context?.drawImage(image, 0, 0);

  return canvas.toDataURL('image/png');
};
