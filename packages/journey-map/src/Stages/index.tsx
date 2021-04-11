import type { FC } from 'react';
import React, { useContext, useRef } from 'react';
import { blue } from '@ant-design/colors';
import { useSize } from 'ahooks';

import { OverflowTitle, Section } from '../components';
import { JourneyMapStore } from '../useJourneyMap';
import { calcStageLength } from '../utils';

import './style.less';

const Stage: FC<{ name: string; color: string }> = ({ name, color }) => {
  const ref = useRef();
  const { width } = useSize(ref);
  const { config } = useContext(JourneyMapStore);

  const height = config?.height?.stage;

  return (
    <div
      ref={ref}
      className="avx-journey-map-stage-step"
      style={{ background: color, height }}
    >
      <div
        className="avx-journey-map-stage-step-text"
        style={{ width: width ? width - 16 : 28 }}
      >
        <OverflowTitle direction={'x'} title={name} />
      </div>
    </div>
  );
};

const Stages: FC = () => {
  const { store, actionLength, config } = useContext(JourneyMapStore);
  const { stages, actions } = store;
  const height = config?.height?.stage || 48;

  return (
    <div className="avx-journey-map-stage-container" style={{ height }}>
      <Section height={height}>阶段</Section>
      <div className="avx-journey-map-stage-content">
        {stages.map((stage, index) => {
          const color = stage.color || blue[0];

          const actionCount = actions[stage.id]?.length || 0;

          const { width, margin } = calcStageLength({
            actionCount,
            stageCount: stages.length,
            index,
            totalCount: actionLength,
          });

          return (
            <div key={stage.id} style={{ width: `${width}%`, ...margin }}>
              <Stage name={stage.name} color={color} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stages;
