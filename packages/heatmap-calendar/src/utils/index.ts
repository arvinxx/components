/**
 * 活跃等级映射
 * @param count
 */
export const mapDataCountToLevel = (count: number) => {
  if (count === 0) return 0;
  if (count < 2) return 1;
  if (count < 5) return 2;
  if (count < 15) return 3;
  return 4;
};
