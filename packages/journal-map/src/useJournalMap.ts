import type { JournalMapData } from './type';

import useMergeValue from 'use-merge-value';
import { useEffect } from 'react';

import { fetchYMLToJSON, getServiceToken } from './utils';

export const useJournalMap = (data: JournalMapData | string, onChange) => {
  const defaultJournalMap = { steps: [], actions: {} };

  const hook = useMergeValue<JournalMapData>(
    typeof data === 'string' ? defaultJournalMap : data,
    { onChange },
  );

  const [, setStore] = hook;

  useEffect(() => {
    if (typeof data === 'string' && data.startsWith('http')) {
      fetchYMLToJSON(data).then((data) => {
        setStore(data);
      });
    }
  }, [data]);

  return hook;
};

export const JournalMapStore = getServiceToken(useJournalMap);
