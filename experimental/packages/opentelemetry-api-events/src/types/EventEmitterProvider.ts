import { EventEmitter } from './EventEmitter';
import { EventEmitterOptions } from './EventEmitterOptions';

export interface EventEmitterProvider {
  getEventEmitter(name: string, version?: string, options?: EventEmitterOptions): EventEmitter;
}
