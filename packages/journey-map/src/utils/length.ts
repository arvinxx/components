/**
 * 根据个数划分出基础长度
 * @param index
 * @param count
 */
export const getBaseLength = (count: number, index: number) => {
  const isFirst = index === 0;
  const isLast = index === count - 1;

  const baseLength = 100 / (2 * count - 2);
  return { isFirst, isLast, baseLength };
};

/**
 * 计算行为长度
 * @param length
 * @param index
 */
export const calcActionLength = (length: number, index: number) => {
  const { isFirst, isLast, baseLength } = getBaseLength(length, index);

  // 如果是第一个节点或最后一个节点 使用单位长度
  if (isFirst || isLast) return baseLength;

  return baseLength * 2;
};

/**
 * 计算阶段长度
 * @param actionCount
 * @param totalCount 用户行为总个数
 * @param stageCount 该阶段包含的行为个数
 * @param index 阶段索引
 */
export const calcStageLength = ({
  actionCount,
  totalCount,
  stageCount,
  index,
}: {
  totalCount: number;
  stageCount: number;
  actionCount: number;
  index: number;
}) => {
  const baseWidth = 100 / (2 * (totalCount - 1));

  const isFirst = index === 0;
  const isLast = index === stageCount - 1;

  let width = baseWidth * (actionCount - 1) * 2;
  if (isFirst || isLast) {
    width += baseWidth / 2;
  } else {
    width += baseWidth;
  }

  const getMargin = () => {
    if (isFirst) return { marginRight: `${baseWidth / 2}%` };
    if (isLast) return { marginLeft: `${baseWidth / 2}%` };
    return { margin: `0 ${baseWidth / 2}%` };
  };

  return { width, margin: getMargin() };
};
