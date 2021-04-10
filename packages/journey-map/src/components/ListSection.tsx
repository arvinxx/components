import type { FC } from 'react';
import React, { useContext } from 'react';
import { blue } from '@ant-design/colors';

import Section from './Section';
import { JourneyMapStore } from '../useJourneyMap';
import { calcStageLength } from '../utils';

import './ListSection.less';
import type { UserAction } from '../types';

interface ListSectionProps {
  title: string;
  sectionKey: keyof UserAction;
}
const ListSection: FC<ListSectionProps> = ({ title, sectionKey }) => {
  const { store, actionLength } = useContext(JourneyMapStore);
  const { stages, actions } = store;

  const isEmpty =
    stages
      .map((s) => {
        const actionsList = actions[s.id];
        return actionsList
          .map((a) => a[sectionKey])
          .flat()
          .filter((t) => t);
      })
      .flat().length === 0;

  return isEmpty ? null : (
    <div className="avx-journey-map-list-container">
      <Section>{title}</Section>
      <div className="avx-journey-map-list-content">
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

          const list = actionsList
            .map((a) => a[sectionKey])
            .flat()
            .filter((t) => t);

          return list.length === 0 ? null : (
            <div
              key={stage.id}
              className="avx-journey-map-list-card"
              style={{ width: `${width}%`, ...margin, borderColor: color }}
            >
              <ul>
                {list?.map((t, index) =>
                  typeof t !== 'string' ? null : <li key={index}>{t}</li>,
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSection;
