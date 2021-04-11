import useMergeValue from 'use-merge-value';
import { useEffect, useState } from 'react';

import { getServiceToken, YMLToJSON } from './utils';
import type { YMLJourneyMapData, JourneyMapData } from './types';
import type { JourneyMapProps } from './index';

type StoreParams = Omit<JourneyMapProps, 'className' | 'style'>;

export const useJourneyMap = ({
  data,
  onChange,
  title: initTitle,
  config: initConfig = {},
}: StoreParams) => {
  const defaultJourneyMap: JourneyMapData = { stages: [], actions: {} };

  const hook = useMergeValue<JourneyMapData>(
    typeof data === 'string' ? defaultJourneyMap : data,
    { onChange },
  );

  const [title, setTitle] = useState<string>(initTitle);
  const [config, setConfig] = useState(initConfig);

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
    setConfig(result.config);
    setStore({ stages, actions });
  };

  useEffect(() => {
    if (typeof data === 'string') {
      getJSONFromStr(data);
    }
  }, [data]);

  const actionList =
    Object.values(store.actions)
      .flat()
      .filter((a) => a) || [];

  const emotionList = actionList.map((a) => a.emotion).filter((e) => e) || [];

  return {
    store,
    actionList,
    actionLength: actionList.length,
    title,
    config,
    emptyAction: actionList.length === 0,
    emptyEmotion: emotionList.length === 0,
  };
};

export const JourneyMapStore = getServiceToken(useJourneyMap);
