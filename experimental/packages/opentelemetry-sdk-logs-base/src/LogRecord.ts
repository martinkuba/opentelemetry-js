import { HrTime, TimeInput, Attributes, AttributeValue } from '@opentelemetry/api';
import { Resource } from '@opentelemetry/resources';
import {
  hrTime,
  timeInputToHrTime,
} from '@opentelemetry/core';

export class LogRecord {
  readonly timestamp: HrTime;
  readonly traceId?: string;
  readonly spanId?: string;
  readonly resource?: Resource;
  readonly attributes: Attributes = {};

  constructor(
    timestamp: TimeInput = hrTime(),
    resource?: Resource | undefined,
    traceId?: string | undefined,
    spanId?: string | undefined
  ) {
    this.timestamp = timeInputToHrTime(timestamp);
    this.traceId = traceId;
    this.spanId = spanId;
    this.resource = resource;
  }

  setAttribute(key: string, value?: AttributeValue): this {
    this.attributes[key] = value;
    return this;
  }
}
