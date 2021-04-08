import type { FC } from 'react';
import React, { useContext } from 'react';
import { blue } from '@ant-design/colors';

import { Section } from '../components';
import { JourneyMapStore } from '../useJourneyMap';

import './style.less';

const Flow: FC = () => {
  const [store] = useContext(JourneyMapStore);
  const { stages } = store;

  return (
    <div className="avx-journey-map-stage-container">
      <Section height={48}>阶段</Section>
      <div className="avx-journey-map-stage-content">
        {stages.map((stage) => {
          const color = stage.color || blue[0];

          return (
            <div key={stage.id} style={{ width: `${100 / stages.length}%` }}>
              <div
                className="avx-journey-map-stage-step"
                style={{ background: color }}
              >
                <div className="avx-journey-map-stage-step-text">
                  {stage.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Flow;
