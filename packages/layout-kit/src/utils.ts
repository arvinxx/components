import type { FlexDirection } from './type';

export const getFlexDirection = (direction: FlexDirection) => {
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

export const calcValue = (value: string | number) =>
  typeof value === 'number' ? `${value}px` : value;
