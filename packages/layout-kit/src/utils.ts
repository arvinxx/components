import type { FlexDirection } from './type';

export const getFlexDirection = (
  direction: FlexDirection,
  isHorizontal: boolean,
) => {
  if (isHorizontal) return 'row';

  switch (direction) {
    case 'horizontal':
      return 'row';
    case 'horizontal-reverse':
      return 'row-reverse';
    case 'vertical':
    default:
      return 'column';
    case 'vertical-reverse':
      return 'column-reverse';
  }
};

export const isHorizontal = (direction: FlexDirection, isHorizontal: boolean) =>
  getFlexDirection(direction, isHorizontal) === 'row';

export const isVertical = (direction: FlexDirection, isHorizontal: boolean) =>
  getFlexDirection(direction, isHorizontal) === 'column';

export const getCssValue = (value: string | number) =>
  typeof value === 'number' ? `${value}px` : value;
