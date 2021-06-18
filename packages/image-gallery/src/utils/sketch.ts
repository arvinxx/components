import copy from 'copy-to-clipboard';
import { copySuccess } from './helper';

export const copySketch = async (url: string) => {
  const res = await fetch(url);

  copy(await res.text());
  copySuccess();
};
