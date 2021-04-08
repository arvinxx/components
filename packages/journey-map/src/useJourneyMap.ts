import type { JourneyMapData } from './type';

import useMergeValue from 'use-merge-value';
import { useEffect } from 'react';

import { fetchYMLToJSON, getServiceToken } from './utils';

export const useJourneyMap = (data: JourneyMapData | string, onChange) => {
  const defaultJourneyMap = { steps: [], actions: {} };

  const hook = useMergeValue<JourneyMapData>(
    typeof data === 'string' ? defaultJourneyMap : data,
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

export const JourneyMapStore = getServiceToken(useJourneyMap);
