import type { JourneyMapData } from './types/type';

import useMergeValue from 'use-merge-value';
import { useEffect } from 'react';

import { getServiceToken, YMLToJSON } from './utils';

export const useJourneyMap = (data: JourneyMapData | string, onChange) => {
  const defaultJourneyMap: JourneyMapData = { stages: [], actions: {} };

  const hook = useMergeValue<JourneyMapData>(
    typeof data === 'string' ? defaultJourneyMap : data,
    { onChange },
  );

  const [store, setStore] = hook;
  /**
   * 从 YML URL 中解析 JSON
   * @param url
   */
  const fetchYMLToJSON = async (url: string): Promise<JourneyMapData> => {
    const res = await fetch(url);
    const yml = await res.text();

    return YMLToJSON(yml);
  };

  useEffect(() => {
    if (typeof data === 'string' && data.startsWith('http')) {
      fetchYMLToJSON(data).then((result) => {
        setStore(result);
      });
    }
  }, [data]);

  const actionList = Object.values(store.actions).flat();

  return { store, actionList, actionLength: actionList.length };
};

export const JourneyMapStore = getServiceToken(useJourneyMap);
