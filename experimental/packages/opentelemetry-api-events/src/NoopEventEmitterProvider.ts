import { EventEmitterProvider } from './types/EventEmitterProvider';
import { EventEmitter } from './types/EventEmitter';
import { EventEmitterOptions } from './types/EventEmitterOptions';

export class NoopEventEmitterProvider implements EventEmitterProvider {
  getEventEmitter(name: string, version?: string, options?: EventEmitterOptions): EventEmitter {
    throw new Error('Method not implemented.');
  }
}

export const NOOP_EVENT_EMITTER_PROVIDER = new NoopEventEmitterProvider();
