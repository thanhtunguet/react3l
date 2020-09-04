import {ErrorMap} from 'core/error-map';
import {Cloneable} from 'core/cloneable';

/**
 * App model
 * - Each model should represent a table in database
 * - Models can be auto-generated by using CodeGenerator
 *
 * @package "react3l"
 * @author "thanhtunguet <ht@thanhtunguet.info>"
 * @module "react3l/core"
 * @class {Model}
 */
export class Model extends Cloneable {
  /**
   * Backend validation errors
   *
   * @type {ErrorMap<self>}
   */
  public errors?: ErrorMap<this>;

  /**
   * React key
   *
   * @type {string | number}
   */
  public key?: string | number;

  public static getIdFieldName<T extends Model>(fieldName: keyof T): keyof T {
    return `${fieldName}Id`;
  }

  /**
   * Model fields
   *
   * @type {any}
   */
  [key: string]: any;
}
