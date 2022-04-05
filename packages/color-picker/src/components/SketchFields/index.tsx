import type { FC } from 'react';
import React, { memo } from 'react';
import isEqual from 'lodash/isEqual';
import { Flexbox } from '@arvinxu/layout-kit';
import cls from 'classnames';

import type { ColorMode, ColorObj } from '../../store';
import { colorSpaceSelector, useStore } from '../../store';
import { isValidHex } from '../../helpers/color';
import DraggableLabel from '../DraggableLabel';
import EditableInput from '../EditableInput';

import './index.less';

export const SketchFields: FC = memo(() => {
  const mode: ColorMode = useStore((s) => s.colorMode);

  const hex = useStore((s) => s.colorModel.hex('rgb'));
  const alpha = useStore((s) => Math.round(s.colorModel.alpha() * 100));

  const modeValue = useStore(colorSpaceSelector, isEqual) as ColorObj;

  const { updateAlpha, updateByHex, disableAlpha, updateColorMode, updateByColorSpace } =
    useStore();

  const prefixCls = 'avx-color-fields';

  return (
    <Flexbox gap={2} style={{ margin: '4px 0' }}>
      <Flexbox horizontal className={prefixCls} gap={5}>
        <div className={`${prefixCls}-hex`}>
          <EditableInput
            value={hex?.replace('#', '')}
            onChange={(str) => {
              if (isValidHex(str)) {
                updateByHex(str);
              }
            }}
            style={{ width: 56 }}
          />
        </div>
        {mode.split('').map((dim) => {
          return (
            <div key={dim}>
              <EditableInput
                value={Math.round(modeValue?.[dim])}
                onChange={(value) => {
                  updateByColorSpace(dim, value);
                }}
              />
            </div>
          );
        })}

        <div>
          <EditableInput value={alpha} onChange={updateAlpha} />
        </div>
      </Flexbox>
      <Flexbox horizontal className={`${prefixCls}-label-ctn`}>
        <div
          className={cls('avx-color-fields-label', `${prefixCls}-label-hex`)}
          style={{ cursor: 'default' }}
        >
          hex
        </div>
        <Flexbox
          horizontal
          className={`${prefixCls}-switcher`}
          align={'center'}
          gap={6}
          style={{ paddingLeft: 5 }}
        >
          <div>
            <select
              className={`${prefixCls}-select`}
              onChange={(e) => {
                updateColorMode(e.target.value as ColorMode);
              }}
            >
              <option value="rgb">RGB</option>
              <option value="hsl">HSL</option>
              <option value="hsv">HSV</option>
            </select>
          </div>
          {mode.split('').map((dim, index) => (
            <DraggableLabel
              key={`${dim}-${index}`}
              text={dim}
              value={modeValue[dim]}
              onChange={(value) => {
                updateByColorSpace(dim, value);
              }}
            />
          ))}
        </Flexbox>
        <DraggableLabel
          className={`${prefixCls}-label-alpha`}
          text={'Alpha'}
          value={alpha}
          style={{ display: disableAlpha ? 'none' : undefined, marginLeft: 4 }}
          onChange={updateAlpha}
        />
      </Flexbox>
    </Flexbox>
  );
});

export default SketchFields;
