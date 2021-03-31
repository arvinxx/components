import { createContainer } from 'unstated-next';
import type { JournalMapData } from './type';
import useMergeValue from 'use-merge-value';

const useJournalMap = (data: JournalMapData) => {
  const [steps] = useMergeValue(data.steps);
  const [actions] = useMergeValue(data.actions);

  return { steps, actions };
};

export const JournalMapStore = createContainer(useJournalMap);
