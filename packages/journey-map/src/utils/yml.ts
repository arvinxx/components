import { load } from 'js-yaml';
import type { JourneyMapData, YMLJourneyMap } from '../types';

/**
 * YML 转 JSON
 * @param yml
 * @constructor
 */
export const YMLToJSON = (yml: string): JourneyMapData => {
  try {
    const json = load(yml) as YMLJourneyMap;

    const { stages } = json;

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
    };
  } catch (e) {
    throw Error(`YML 不符合规范: \n${e}`);
  }
};
