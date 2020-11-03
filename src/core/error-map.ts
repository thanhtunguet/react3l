import { Model } from '@react3l/react3l/core/model';

/**
 * ErrorMap for Model
 *
 * @param T {Model}
 *
 * @deprecated ErrorMap importing from `core` is deprecated. Should use import from `types` instead.
 */
export type ErrorMap<T extends Model> = Record<Exclude<keyof T, 'errors'>, string>;
