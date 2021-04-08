import { load } from 'js-yaml';
import type { YMLJourneyMapRawData, YMLJourneyMapData } from '../types';

/**
 * YML 转 JSON
 * @param yml
 * @constructor
 */
export const YMLToJSON = (yml: string): YMLJourneyMapData => {
  try {
    const json = load(yml) as YMLJourneyMapRawData;

    const { stages, title, config } = json;

    const validAction = {};

    stages.forEach((stage) => {
      validAction[stage.name] = stage.actions;
    });

    return {
      stages: stages.map((stage) => {
        const { actions, ...res } = stage;
        return { id: stage.name, ...res };
      }),
      actions: validAction,
      title,
      config,
    };
  } catch (e) {
    throw Error(`YML 不符合规范: \n${e}`);
  }
};
