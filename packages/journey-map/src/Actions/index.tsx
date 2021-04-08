import type { FC } from 'react';
import React, { useContext } from 'react';
import { blue } from '@ant-design/colors';

import { Section } from '../components';
import Action from './Action';
import { JourneyMapStore } from '../useJourneyMap';

import './style.less';

const Actions: FC = () => {
  const [store] = useContext(JourneyMapStore);
  const { actions, stages } = store;

  console.log(Object.values(actions).flat());
  // const actionList = Object.values(actions).flat();

  return (
    <div className="avx-journey-map-flow-container">
      <Section height={120}>用户行为</Section>
      <div className="avx-journey-map-flow-content">
        {stages.map((step, index) => {
          const color = step.color || blue[0];

          return (
            <div key={step.id} style={{ width: `${100 / stages.length}%` }}>
              <Action
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

export default Actions;
