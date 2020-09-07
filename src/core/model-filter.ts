import { DEFAULT_TAKE, INITIAL_SKIP } from 'react3l/config/consts';
import { Cloneable } from 'react3l/core/cloneable';
import { Model } from 'react3l/core/model';
import { OrderType } from 'react3l/core/order-type';

/**
 * App model filter
 * - Each Model should have and only have one ModelFilter
 * - ModelFilters can be auto-generated by using CodeGenerator
 *
 * @package "react3l"
 * @author "thanhtunguet <ht@thanhtunguet.info>"
 * @module "react3l/core"
 * @class {ModelFilter}
 */
export class ModelFilter<T extends Model = any> extends Cloneable {
  /**
   * Skip number
   *
   * @type {number}
   */
  public skip: number = INITIAL_SKIP;

  /**
   * Take number
   *
   * @type {number}
   */
  public take: number = DEFAULT_TAKE;

  /**
   * Field name to order by
   *
   * @type {string}
   */
  public orderBy?: keyof T | string;

  /**
   * Order type
   *
   * @type {OrderType}
   */
  public orderType?: OrderType;

  /**
   * Filter fields
   */
  [key: string]: any;
}
