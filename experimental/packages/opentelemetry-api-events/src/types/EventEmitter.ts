import { Attributes } from '@opentelemetry/api';
import { Event } from './Event';

export interface EventEmitter {
  createEvent(name: string): Event;
  emit(event: Event): void;
  emit(name: string, attributes: Attributes): void;
}
