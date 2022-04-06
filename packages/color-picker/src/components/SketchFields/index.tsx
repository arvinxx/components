import type { FC } from 'react';
import React, { memo } from 'react';
import isEqual from 'lodash/isEqual';
import { Flexbox } from '@arvinxu/layout-kit';
import cls from 'classnames';
import copy from 'copy-to-clipboard';
import shallow from 'zustand/shallow';

import type { ColorMode, ColorObj, ColorPickerStore } from '../../store';
import { colorSpaceSelector, useStore } from '../../store';
import { isValidHex } from '../../helpers/color';
import DraggableLabel from '../DraggableLabel';
import EditableInput from '../EditableInput';

import './index.less';

const selector = (s: ColorPickerStore) => ({
  updateAlpha: s.updateAlpha,
  updateByHex: s.updateByHex,
  updateColorMode: s.updateColorMode,
  updateByColorSpace: s.updateByColorSpace,
});

export const SketchFields: FC = memo(() => {
  const mode: ColorMode = useStore((s) => s.colorMode);

  const hex = useStore((s) => s.colorModel.hex('rgb'));
  const alpha = useStore((s) => Math.round(s.colorModel.alpha() * 100));

  const modeValue = useStore(colorSpaceSelector, isEqual) as ColorObj;

  const { updateAlpha, updateByHex, updateColorMode, updateByColorSpace } = useStore(
    selector,
    shallow,
  );

  const prefixCls = 'avx-color-fields';

  return (
    <Flexbox gap={2} style={{ margin: '4px 0' }}>
      <Flexbox horizontal className={prefixCls} gap={5}>
        <div className={`${prefixCls}-hex`}>
          <EditableInput
            value={hex?.replace('#', '').toUpperCase()}
            onChange={(str) => {
              if (isValidHex(str)) {
                updateByHex(str);
              }
            }}
            style={{ width: 56, fontFamily: 'monospace' }}
          />
        </div>
        {mode.split('').map((dim) => {
          return (
            <div key={dim}>
              <EditableInput
                value={Math.round(modeValue?.[dim] || 0)}
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
          title={'点击复制'}
          className={cls('avx-color-fields-label', `${prefixCls}-label-hex`)}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            copy(hex);
          }}
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
              value={mode}
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
          style={{ marginLeft: 4 }}
          onChange={updateAlpha}
        />
      </Flexbox>
    </Flexbox>
  );
});

export default SketchFields;
