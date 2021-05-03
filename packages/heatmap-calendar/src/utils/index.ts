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
/**
 * 映射位月份
 * @param week
 */
export const mapToMonth = (week: number) => {
  switch (week) {
    case 2:
      return 'MAY';
    case 6:
      return 'JUN';
    case 10:
      return 'JUL';
    case 15:
      return 'AUG';
    case 19:
      return 'SEP';
    case 24:
      return 'OCT';
    default:
      return '';
  }
};
