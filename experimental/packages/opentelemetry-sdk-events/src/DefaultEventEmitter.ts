import { Attributes } from '@opentelemetry/api';
import * as api from '@opentelemetry/api-events';
import { InstrumentationLibrary } from '@opentelemetry/core';
import { Resource } from '@opentelemetry/resources';
import { Event } from './Event';
import { EventProcessor } from './EventProcessor';

export class DefaultEventEmitter implements api.EventEmitter {
  processor: EventProcessor;
  instrumentationLibrary: InstrumentationLibrary;
  resource: Resource;

  constructor(processor: EventProcessor, instrumentationLibrary: InstrumentationLibrary, resource: Resource) {
    this.processor = processor;
    this.instrumentationLibrary = instrumentationLibrary;
    this.resource = resource;
  }

  createEvent(name: string): api.Event {
    return new Event(name, this.instrumentationLibrary, this.resource);
  }

  emit(event: api.Event): void;
  emit(name: string, attributes: Attributes): void;
  emit(name: any, attributes?: any): void {
    if (typeof name === 'string') {
      const event = new Event(name, this.instrumentationLibrary, this.resource);
      if (attributes) {
        for (let key in attributes) {
          event.setAttribute(key, attributes[key]);
        }
      }
      this.processor.emit(event);
    } else if (typeof name === 'object') {
      this.processor.emit(name as Event);
    }
  }
}
