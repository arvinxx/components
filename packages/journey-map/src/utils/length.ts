/**
 * 计算长度
 * @param length
 * @param index
 */
export const calcLength = (length: number, index: number) => {
  const isFirst = index === 0;
  const isLast = index === length - 1;

  const firstOrLastLength = 100 / (2 * length - 1);

  // 如果是第一个节点或最后一个节点 使用单位长度
  if (isFirst || isLast) return firstOrLastLength;

  return firstOrLastLength * 2;
};
