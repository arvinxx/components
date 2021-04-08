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

  return (
    <div
      ref={ref}
      className="avx-journey-map-stage-step"
      style={{ background: color }}
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
  const { store, actionLength } = useContext(JourneyMapStore);
  const { stages, actions } = store;

  return (
    <div className="avx-journey-map-stage-container">
      <Section height={48}>阶段</Section>
      <div className="avx-journey-map-stage-content">
        {stages.map((stage, index) => {
          const color = stage.color || blue[0];

          const actionCount = actions[stage.id].length;

          const { baseWidth, isLast, isFirst, width } = calcStageLength({
            actionCount,
            stageCount: stages.length,
            index,
            totalCount: actionLength,
          });

          const getMargin = () => {
            if (isFirst) return { marginRight: `${baseWidth / 2}%` };
            if (isLast) return { marginLeft: `${baseWidth / 2}%` };
            return { margin: `0 ${baseWidth / 2}%` };
          };

          return (
            <div key={stage.id} style={{ width: `${width}%`, ...getMargin() }}>
              <Stage name={stage.name} color={color} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stages;
