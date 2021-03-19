import type { EdgeReference } from '../types';
import { mindFlowColors } from '../themes/nodeColor';
import chorma from 'chroma-js';

/**
 * 将 rgba 转为 hex
 * @param values
 */
export const rgba2hex = (values: number[]) => {
  const a = values[3];

  const r = Math.floor(a * values[0] + (1 - a) * 255);
  const g = Math.floor(a * values[1] + (1 - a) * 255);
  const b = Math.floor(a * values[2] + (1 - a) * 255);

  return `#${`0${r.toString(16)}`.slice(-2)}${`0${g.toString(16)}`.slice(
    -2,
  )}${`0${b.toString(16)}`.slice(-2)}`;
};

/**
 * 从文本色值获得 hex
 * @param color
 */
export const mapColorToHex = (color: string) => {
  switch (color) {
    case 'blue':
    case 'cyan':
      return mindFlowColors.blue;
    case 'teal':
      return mindFlowColors.cyan;
    case 'green':
      return mindFlowColors.green;
    case 'yellow':
      return mindFlowColors.yellow;
    case 'purple':
      return mindFlowColors.purple;
    case 'pink':
    case 'red':
    case 'orange':
      return mindFlowColors.red;

    case 'gray':
      return mindFlowColors.gray;
    default:
      return mindFlowColors.gray;
  }
};

/**
 * 参考类型隐射到颜色
 * @param type
 */
export const mapReferenceTypeToColor = (type: EdgeReference['type']) => {
  switch (type) {
    case 'ground':
      return 'green';
    case 'warrant':
      return 'blue';
    case 'backing':
      return 'yellow';
    case 'rebuttal':
      return 'purple';
    default:
      return 'gray';
  }
};

/**
 * 节点类型映射到颜色
 * @param type
 */
export const mapNodeTypeToColor = (type: string) => {
  switch (type) {
    case 'question':
      return 'red';
    case 'action':
      return 'green';
    case 'idea':
      return 'yellow';
    case 'subject':
      return 'blue';
    default:
      return 'grey';
  }
};

/**
 * 使用 chorma 得到颜色对象
 * @param type
 */
export const getColorByType = (type: string) => {
  return chorma(mapColorToHex(mapNodeTypeToColor(type)));
};
