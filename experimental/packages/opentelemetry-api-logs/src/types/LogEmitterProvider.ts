import { LogEmitter } from './LogEmitter';
import { LogEmitterOptions } from './LogEmitterOptions';

export interface LogEmitterProvider {
  getLogEmitter(name: string, version?: string, options?: LogEmitterOptions): LogEmitter;
}
