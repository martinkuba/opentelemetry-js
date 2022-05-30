import {
  EventEmitterProvider,
  EventEmitterOptions,
  EventEmitter
} from '@opentelemetry/api-events';
import { LogEmitterProvider } from '@opentelemetry/sdk-logs-base';
import { LogEventEmitter } from './LogEventEmitter';

export class LogEventEmitterProvider implements EventEmitterProvider {
  logEmitterProvider: LogEmitterProvider;

  constructor(logEmitterProvider: LogEmitterProvider) {
    this.logEmitterProvider = logEmitterProvider;
  }

  getEventEmitter(name: string, version?: string, options?: EventEmitterOptions): EventEmitter {
    const logEmitter = this.logEmitterProvider.getLogEmitter(name, version);
    return new LogEventEmitter(logEmitter);
  }
}
