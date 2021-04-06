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

  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === stepLength - 1;

  const isCenterStep = !isFirstStep && !isLastStep;

  return (
    <div className="avx-journal-map-actions-container">
      {actionList.map((action, index) => {
        const n = actionList.length;

        const isFirst = index === 0;
        const isLast = index === n - 1;

        const calcLength = () => {
          const centerLength = 100 / n; // 正常中间的节点
          const firstOrLastLength = 100 / (2 * n - 1);

          // 中间节点则使用正常长度
          if (isCenterStep) return centerLength;

          // 如果是第一个节点或最后一个节点 使用单位长度
          if ((isFirstStep && isFirst) || (isLastStep && isLast))
            return firstOrLastLength;

          return firstOrLastLength * 2;
        };

        return (
          <div
            key={action.title}
            className="avx-journal-map-actions-action"
            style={{
              strokeLinecap: 'round',
              width: `${calcLength()}%`,
              marginLeft: isFirstStep && isFirst ? 8 : 0,
              marginRight: isLastStep && isLast ? 8 : 0,
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
        );
      })}
    </div>
  );
};

export default Actions;
