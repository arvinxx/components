import type { FC } from 'react';
import React from 'react';
import { blue } from '@ant-design/colors';

import Stage from './Stage';
import Actions from './Actions';
import { JournalMapStore } from '../useJournalMap';

import './Flow.less';

const Flow: FC = () => {
  const { actions, steps } = JournalMapStore.useContainer();
  return (
    <div className="avx-journal-map-flow-container">
      <div style={{ width: 40 }}>
        <Stage height={48}>阶段</Stage>
        <div style={{ marginTop: 24 }}>
          <Stage height={120}>用户行为</Stage>
        </div>
      </div>
      <div className="avx-journal-map-flow-content">
        {steps.map((step, index) => {
          const color = step.color || blue[0];

          return (
            <div key={step.id} style={{ width: `${100 / steps.length}%` }}>
              <div
                className="avx-journal-map-flow-step"
                style={{ background: color }}
              >
                <div className="avx-journal-map-flow-step-text">
                  {step.name}
                </div>
              </div>
              <Actions
                actions={actions}
                step={step}
                stepIndex={index}
                stepLength={steps.length}
                color={color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Flow;
