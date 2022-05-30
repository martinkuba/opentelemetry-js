import { EventEmitter } from './types/EventEmitter';
import { Event } from './types/Event';
import { Attributes } from '@opentelemetry/api';
import { NonRecordingEvent } from './NonRecordingEvent';

export class NoopEventEmitter implements EventEmitter {
  createEvent(name: string): Event {
    return new NonRecordingEvent();
  }
  emit(event: Event): void;
  emit(name: string, attributes: Attributes): void;
  emit(name: any, attributes?: any): void {
  }
}
