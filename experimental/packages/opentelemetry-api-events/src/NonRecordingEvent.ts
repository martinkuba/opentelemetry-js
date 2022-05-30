import { AttributeValue } from "@opentelemetry/api";
import { Event } from "./types/Event";

export class NonRecordingEvent implements Event {
  name: string = '';

  setAttribute(key: string, value?: AttributeValue): this {
    return this;
  }
}
