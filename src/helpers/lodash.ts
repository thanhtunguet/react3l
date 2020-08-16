import lodashDebounce from 'lodash/debounce';
import {DEBOUNCE_TIME_100} from 'config/consts';

export function debounce<T extends (...params: any[]) => any>(fn: T, time: number = DEBOUNCE_TIME_100): T {
  return lodashDebounce(fn, time);
}

export {default as kebabCase} from 'lodash/kebabCase';

export {default as camelCase} from 'lodash/camelCase';

export {default as snakeCase} from 'lodash/snakeCase';
