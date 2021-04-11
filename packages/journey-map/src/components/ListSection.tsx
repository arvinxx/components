import type { FC } from 'react';
import React, { useContext } from 'react';
import { blue } from '@ant-design/colors';

import Section from './Section';
import { JourneyMapStore } from '../useJourneyMap';
import { calcStageLength } from '../utils';

import './ListSection.less';
import type { CommonSection, Stage } from '../types';

interface ListSectionProps {
  title: string;
  sectionKey: keyof CommonSection;
  height?: number;
}
const ListSection: FC<ListSectionProps> = ({ title, sectionKey, height }) => {
  const { store, actionLength } = useContext(JourneyMapStore);
  const { stages, actions } = store;

  const getList = (stage: Stage) => {
    const actionsList = actions[stage.id] || [];

    return actionsList
      .map((a) => a[sectionKey])
      .flat()
      .concat(stage[sectionKey])
      .filter((t) => t);
  };

  const isEmpty = stages.map(getList).flat().length === 0;

  return isEmpty ? null : (
    <div className="avx-journey-map-list-container" style={{ height }}>
      <Section height={height}>{title}</Section>
      <div className="avx-journey-map-list-content">
        {stages.map((stage, index) => {
          const color = stage.color || blue[1];

          const { width, margin } = calcStageLength({
            actionCount: actions[stage.id].length,
            stageCount: stages.length,
            index,
            totalCount: actionLength,
          });

          const list = getList(stage);

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
