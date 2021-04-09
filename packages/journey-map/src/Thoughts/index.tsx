import type { FC } from 'react';
import React, { useContext } from 'react';
import { blue } from '@ant-design/colors';

import { Section } from '../components';
import { JourneyMapStore } from '../useJourneyMap';
import { calcStageLength } from '../utils';

import './style.less';

const Thoughts: FC = () => {
  const { store, actionLength } = useContext(JourneyMapStore);
  const { stages, actions } = store;

  const isEmpty =
    stages
      .map((s) => {
        const actionsList = actions[s.id];
        return actionsList
          .map((a) => a.thoughts)
          .flat()
          .filter((t) => t);
      })
      .flat().length === 0;

  return isEmpty ? null : (
    <div className="avx-journey-map-thought-container">
      <Section>想法</Section>
      <div className="avx-journey-map-thought-content">
        {stages.map((stage, index) => {
          const color = stage.color || blue[1];

          const actionsList = actions[stage.id];

          const actionCount = actionsList.length;

          const { width, margin } = calcStageLength({
            actionCount,
            stageCount: stages.length,
            index,
            totalCount: actionLength,
          });

          const thoughts = actionsList
            .map((a) => a.thoughts)
            .flat()
            .filter((t) => t);

          return thoughts.length === 0 ? null : (
            <div
              key={stage.id}
              className="avx-journey-map-thought-list"
              style={{ width: `${width}%`, ...margin, borderColor: color }}
            >
              <ul>
                {thoughts.map((t, index) => (
                  <li key={index}>{t}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Thoughts;
