import { load } from 'js-yaml';
import type { AssetGalleryData, AssetGalleryYML, Asset } from '../types';

/**
 * YML 转 JSON
 * @param yml
 * @constructor
 */
export const YMLToJSON = (yml: string): AssetGalleryData => {
  try {
    const data = load(yml) as AssetGalleryYML;

    return {
      data: data.map(
        (item): Asset => ({
          title: item.标题,
          description: item.描述,
          dark: item.反色,
          padding: item.padding,
          url: item.链接,
          darkBackground: item.反色背景色,
          sketch: item.sketch,
        }),
      ),
    };
  } catch (e) {
    throw Error(`YML 不符合规范: \n${e}`);
  }
};
