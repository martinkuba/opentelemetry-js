import { Attributes } from "../common/Attributes";

export interface Entity {
  type: string;
  identifier: Attributes;
  attributes: Attributes;
  schemaUrl?: string;
}
