import { Attributes } from "../common/Attributes";
import { EntityListener } from "./EntityListener";
import { Resource } from "./Resource";

export interface EntityProvider {
  addEntity(id: Attributes, name: string, attributes?: Attributes): void;
  updateEntity(id: Attributes, attributes?: Attributes): void;
  deleteEntity(id: Attributes): void;
  getResource(): Resource;
  onChange(listener: EntityListener): void;
}
