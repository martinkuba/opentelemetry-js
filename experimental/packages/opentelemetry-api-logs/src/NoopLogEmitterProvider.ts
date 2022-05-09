import { LogEmitterProvider } from './types/LogEmitterProvider';
import { LogEmitter } from './types/LogEmitter';
import { NoopLogEmitter } from './NoopLogEmitter';

export class NoopLogEmitterProvider implements LogEmitterProvider {
  getLogEmitter(name: string, version?: string): LogEmitter {
    return new NoopLogEmitter();
  }
}

export const NOOP_LOG_EMITTER_PROVIDER = new NoopLogEmitterProvider();
