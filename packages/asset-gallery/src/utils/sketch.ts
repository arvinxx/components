/* istanbul ignore file */

import copy from 'copy-to-clipboard';
import { copySuccess } from './helper';

export const copySketch = (url: string) => {
  copy(url);
  copySuccess();
};
