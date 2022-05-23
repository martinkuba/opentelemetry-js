import { AttributeValue } from '@opentelemetry/api';

export interface LogRecord {
  setAttribute(key: string, value?: AttributeValue): this;
}
