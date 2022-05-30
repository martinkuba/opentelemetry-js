import * as api from '@opentelemetry/api-events';
import { LogEvent } from './LogEvent';
import { LogEmitter } from '@opentelemetry/sdk-logs-base';
import { Attributes } from '@opentelemetry/api';

export class LogEventEmitter implements api.EventEmitter {
  logEmitter: LogEmitter;

  constructor(logEmitter: LogEmitter) {
    this.logEmitter = logEmitter;
  }

  createEvent(name: string): LogEvent {
    return new LogEvent(name);
  }

  emit(event: LogEvent): void;
  emit(name: string, attributes: Attributes): void;
  emit(name: any, attributes?: any): void {
    if (typeof name === 'string') {
      const event = new LogEvent(name);
      if (attributes) {
        for (let key in attributes) {
          event.setAttribute('event.name', name);
          event.setAttribute(key, attributes[key]);
        }
      }
      this.logEmitter.emit(event);
    } else if (typeof name === 'object') {
      const event = name;
      event.setAttribute('event.name', event.name);
      this.logEmitter.emit(name as LogEvent);
    }
  }
}
