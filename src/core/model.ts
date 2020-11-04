import { getEnumerableProperties } from '@react3l/react3l/decorators/helpers/get-enumerable-properties';
import { ErrorMap } from '@react3l/react3l/types';

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
export class Model {
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

  /**
   * Model fields
   *
   * @type {any}
   */
  [key: string]: any;

  constructor(partial?: Partial<Model>) {
    if (partial) {
      getEnumerableProperties(Object.getPrototypeOf(this)).forEach((key: string) => {
        if (partial.hasOwnProperty(key)) {
          this[key] = partial[key];
        }
      });
    }
  }
}
