import { EventEmitter } from './types/EventEmitter';
import { Event } from './types/Event';

export class NoopEventEmitter implements EventEmitter {
  emit(event: Event): void {
  }
}
