import { Resource } from '@opentelemetry/resources';
import { Attributes } from '@opentelemetry/api';
import { InstrumentationLibrary } from '@opentelemetry/core';

export interface ReadableEvent {
  readonly name: string;
  readonly attributes: Attributes;
  readonly resource: Resource;
  readonly instrumentationLibrary: InstrumentationLibrary;
}
