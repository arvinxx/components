import { createContainer } from 'unstated-next';
import useMergeValue from 'use-merge-value';

import type { JournalMapData } from './type';

const useJournalMap = (data: JournalMapData) => {
  const [steps] = useMergeValue(data.steps);
  const [actions] = useMergeValue(data.actions);

  return { steps, actions };
};

export const JournalMapStore = createContainer(useJournalMap);
