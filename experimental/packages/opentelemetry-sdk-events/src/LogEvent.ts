import { Event } from '@opentelemetry/api-events';
import { LogRecord } from '@opentelemetry/sdk-logs-base';
import { TimeInput } from '@opentelemetry/api';
import { Resource } from '@opentelemetry/resources';
import { hrTime } from '@opentelemetry/core';

export class LogEvent extends LogRecord implements Event  {
  name: string;

  constructor(
    name: string,
    timestamp: TimeInput = hrTime(),
    resource?: Resource | undefined,
    traceId?: string | undefined,
    spanId?: string | undefined
  ) {
    super(timestamp, resource, traceId, spanId);
    this.name = name;
    // this.setAttribute('event.name', name);
  }
}
