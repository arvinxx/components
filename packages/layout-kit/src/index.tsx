import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { calcValue, getFlexDirection } from './utils';
import type {
  ContentDistribution,
  ContentPosition,
  FlexDirection,
} from './type';

export type CommonSpaceNumber = 2 | 4 | 8 | 12 | 16 | 24;

export interface IFlexbox {
  horizontal?: boolean;
  direction?: FlexDirection;
  distribution?: ContentDistribution;
  align?: ContentPosition;
  gap?: CommonSpaceNumber | number;
  width?: number | string;
  height?: number | string;
  padding?: string | number | CommonSpaceNumber;
}

export type FlexboxProps = IFlexbox &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Flexbox: FC<FlexboxProps> = styled.div.attrs(() => ({
  className: 'layoutkit-flexbox',
}))<IFlexbox>`
  display: flex;
  flex-direction: ${(props) => {
    return getFlexDirection(props.direction, props.horizontal);
  }};
  justify-content: ${(props) => props.distribution};
  align-items: ${(props) => props.align};

  width: ${(props) => calcValue(props.width)};
  height: ${(props) => calcValue(props.height)};

  padding: ${(props) => calcValue(props.padding)};

  > *:not(:last-child) {
    margin-right: ${(props) =>
      getFlexDirection(props.direction, props.horizontal) === 'row' &&
      calcValue(props.gap)};
    margin-bottom: ${(props) =>
      getFlexDirection(props.direction, props.horizontal) === 'column' &&
      calcValue(props.gap)};
  }
`;
