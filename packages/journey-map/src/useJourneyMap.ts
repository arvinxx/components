import useMergeValue from 'use-merge-value';
import { useEffect, useState } from 'react';

import { getServiceToken, YMLToJSON } from './utils';
import type { YMLJourneyMapData, JourneyMapData } from './types';

interface StoreParams {
  data: JourneyMapData | string;
  onChange?: (data: JourneyMapData) => void;
  title?: string;
}

export const useJourneyMap = ({
  data,
  onChange,
  title: initTitle,
}: StoreParams) => {
  const defaultJourneyMap: JourneyMapData = { stages: [], actions: {} };

  const hook = useMergeValue<JourneyMapData>(
    typeof data === 'string' ? defaultJourneyMap : data,
    { onChange },
  );

  const [title, setTitle] = useState<string>(initTitle);

  const [store, setStore] = hook;
  /**
   * 从 YML URL 中解析 JSON
   * @param url
   */
  const fetchYMLToJSON = async (url: string): Promise<YMLJourneyMapData> => {
    const res = await fetch(url);
    const yml = await res.text();

    return YMLToJSON(yml);
  };

  const getJSONFromStr = async (str: string) => {
    let result: YMLJourneyMapData;
    if (str.startsWith('http')) {
      result = await fetchYMLToJSON(str);
    } else {
      result = YMLToJSON(str);
    }

    const { stages, actions } = result;
    setTitle(result.title);
    setStore({ stages, actions });
  };

  useEffect(() => {
    if (typeof data === 'string') {
      getJSONFromStr(data);
    }
  }, [data]);

  const actionList = Object.values(store.actions).flat();

  return { store, actionList, actionLength: actionList.length, title };
};

export const JourneyMapStore = getServiceToken(useJourneyMap);
