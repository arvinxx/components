import { load } from 'js-yaml';
import type { JourneyMapData, JourneyMapYML } from '../type';

/**
 * 从 YML URL 中解析 JSON
 * @param url
 */
export const fetchYMLToJSON = async (url: string): Promise<JourneyMapData> => {
  const res = await fetch(url);
  const yml = await res.text();

  try {
    const json = load(yml) as JourneyMapYML;

    const { actions, steps } = json;

    const validAction = {};

    // eslint-disable-next-line no-restricted-syntax,guard-for-in
    for (const actionsKey in actions) {
      validAction[actionsKey] = actions[actionsKey].map((entry) => {
        const [title, emotion] = Object.entries(entry)[0];
        return {
          title,
          emotion,
        };
      });
    }

    return {
      steps,
      actions: validAction,
    };
  } catch (e) {
    throw Error(`YML 不符合规范: \n${e}`);
  }
};
