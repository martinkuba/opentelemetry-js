import * as api from '@opentelemetry/api-events';
import { AttributeValue } from '@opentelemetry/api-events/node_modules/@opentelemetry/api';
import { ReadableEvent } from './export/ReadableEvent';
import { Resource } from '@opentelemetry/resources';
import { Attributes } from '@opentelemetry/api';
import { InstrumentationLibrary } from '@opentelemetry/core';

export class Event implements api.Event, ReadableEvent {
  name: string;
  attributes: Attributes = {};
  readonly resource: Resource;
  readonly instrumentationLibrary: InstrumentationLibrary;

  constructor(name: string, instrumentationLibrary: InstrumentationLibrary, resource: Resource) {
    this.name = name;
    this.instrumentationLibrary = instrumentationLibrary;
    this.resource = resource;
  }

  setAttribute(key: string, value?: AttributeValue): this {
    return this;
  }
}
