import { LogEmitter } from './types/LogEmitter';
import { LogRecord } from './types/LogRecord';
import { Attributes } from './types/Attributes';

export class NoopLogEmitter implements LogEmitter {
  emit(record: LogRecord): void {};
  addEvent(name: string, attributes: Attributes): void {};
}
