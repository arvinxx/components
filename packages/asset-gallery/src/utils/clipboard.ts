/* istanbul ignore file */

/**
 * 利用 Clipboard 剪切板
 * @param type
 * @param blob
 */
export const copyToClipboard = async (type: string, blob: Blob) => {
  const { state } = await navigator.permissions.query({
    // @ts-ignore
    name: 'clipboard-write',
  });

  const isAllowed = state === 'granted';
  if (navigator.clipboard && isAllowed) {
    // @ts-ignore
    await navigator.clipboard.write([new ClipboardItem({ [type]: blob })]);
  }

  return isAllowed;
};
