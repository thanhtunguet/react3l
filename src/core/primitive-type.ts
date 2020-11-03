import { Moment } from 'moment';

/**
 * Data primitive types, which will be treated as simple fields
 *
 * @deprecated Import PrimitiveType from `core` is deprecated. Import from `types` instead.
 */
export type PrimitiveType = null | string | boolean | number | Moment;
