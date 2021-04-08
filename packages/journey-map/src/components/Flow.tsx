import type { FC } from 'react';
import React, { useContext } from 'react';
import { blue } from '@ant-design/colors';

import Stage from './Stage';
import Actions from './Actions';
import { JourneyMapStore } from '../useJourneyMap';

import './Flow.less';

const Flow: FC = () => {
  const [store] = useContext(JourneyMapStore);
  const { actions, stages } = store;

  return (
    <div className="avx-journey-map-flow-container">
      <div style={{ width: 40 }}>
        <Stage height={48}>阶段</Stage>
        <div style={{ marginTop: 24 }}>
          <Stage height={120}>用户行为</Stage>
        </div>
      </div>
      <div className="avx-journey-map-flow-content">
        {stages.map((step, index) => {
          const color = step.color || blue[0];

          return (
            <div key={step.id} style={{ width: `${100 / stages.length}%` }}>
              <div
                className="avx-journey-map-flow-step"
                style={{ background: color }}
              >
                <div className="avx-journey-map-flow-step-text">
                  {step.name}
                </div>
              </div>
              <Actions
                actions={actions}
                step={step}
                stepIndex={index}
                stepLength={stages.length}
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
