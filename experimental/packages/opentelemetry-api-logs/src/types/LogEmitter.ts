import { LogRecord } from './LogRecord';
import { Attributes } from '@opentelemetry/api';

export interface LogEmitter {
  emit(record: LogRecord): void;
  emitEvent(name: string, attributes: Attributes): void;
}
