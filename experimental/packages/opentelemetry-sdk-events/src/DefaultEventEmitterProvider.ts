import {
  EventEmitterProvider,
  EventEmitterOptions,
  EventEmitter
} from '@opentelemetry/api-events';
import { Resource } from '@opentelemetry/resources';
import { EventProcessor } from './EventProcessor';
import { DefaultEventEmitter } from './DefaultEventEmitter';

export class DefaultEventEmitterProvider implements EventEmitterProvider {
  resource: Resource;
  processor: EventProcessor;

  constructor(resource: Resource, processor: EventProcessor) {
    this.resource = resource;
    this.processor = processor;
  }

  getEventEmitter(name: string, version?: string, options?: EventEmitterOptions): EventEmitter {
    const instrumentationLibrary = {
      name: name,
      version: version
    }
    return new DefaultEventEmitter(this.processor, instrumentationLibrary, this.resource);
  }
}
