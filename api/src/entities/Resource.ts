import { Attributes } from "../common/Attributes";
import { Entity } from "./Entity";

export interface Resource {
  /**
   * @returns the Resource's attributes.
   */
  readonly attributes: Attributes;

  /**
   * @returns a list of Entities associated with the resource
   */
  readonly entities: Entity[];
}
