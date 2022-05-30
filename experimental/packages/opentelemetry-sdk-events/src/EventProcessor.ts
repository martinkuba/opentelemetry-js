import { ReadableEvent } from './export/ReadableEvent';

export interface EventProcessor {
  emit(data: ReadableEvent): void;

  shutdown(): Promise<void>;

  forceFlush(): Promise<void>;
}
