import type { FC } from 'react';
import React, { useContext } from 'react';
import { blue } from '@ant-design/colors';

import { Section } from '../components';
import OverflowTitle from './OverflowTitle';
import { JourneyMapStore } from '../useJourneyMap';
import { calcLength } from '../utils';

import './style.less';

const Actions: FC = () => {
  const [store] = useContext(JourneyMapStore);
  const { actions, stages } = store;

  const actionList = Object.values(actions).flat();

  const getColor = (name: string) => {
    let color: string = blue[0];
    stages.forEach((stage) => {
      if (
        stage.color &&
        actions[stage.id].findIndex((a) => a.name === name) > -1
      )
        color = stage.color;
    });

    return color;
  };

  return (
    <div className="avx-journey-map-actions-container" style={{ height: 140 }}>
      <Section height={140}>用户行为</Section>
      <div className="avx-journey-map-actions-content">
        {actionList.map((action, index) => {
          const color = getColor(action.name);

          return (
            <div
              key={action.name}
              className="avx-journey-map-actions-action"
              style={{
                strokeLinecap: 'round',
                width: `${calcLength(actionList.length, index)}%`,
                borderTopColor: color,
              }}
            >
              <div
                className="avx-journey-map-actions-action-point"
                style={{ background: color }}
              />
              <div className="avx-journey-map-actions-action-text">
                <OverflowTitle title={action.name} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Actions;
