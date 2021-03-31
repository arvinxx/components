import type { FC } from 'react';
import React from 'react';

import type { Step, JournalMapData } from '../type';

import './Actions.less';

interface UserActionProps {
  step: Step;
  stepIndex: number;
  stepLength: number;
  actions: JournalMapData['actions'];
  color: string;
}
const Actions: FC<UserActionProps> = ({
  step,
  stepIndex,
  actions,
  stepLength,
  color,
}) => {
  const actionList = actions[step.id];

  return (
    <div className="avx-journal-map-actions-container">
      {actionList.map((action, aIndex) => (
        <div
          key={action.title}
          className="avx-journal-map-actions-action"
          style={{
            strokeLinecap: 'round',
            width: `${100 / actionList.length}%`,
            marginLeft: stepIndex === 0 && aIndex === 0 ? 1 : 0,
            marginRight:
              stepIndex === stepLength - 1 && aIndex === actionList.length - 1
                ? 1
                : 0,
            borderTopColor: color,
          }}
        >
          <div
            className="avx-journal-map-actions-action-point"
            style={{ background: color }}
          />
          <div className="avx-journal-map-actions-action-text">
            {action.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Actions;
