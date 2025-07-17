import { EntityState } from "./EntityState";
import { Resource } from "./Resource";

export interface EntityListener {
  onEntityState(state: EntityState, resource: Resource): void;
  onEntityDelete(state: EntityState): void;
}
