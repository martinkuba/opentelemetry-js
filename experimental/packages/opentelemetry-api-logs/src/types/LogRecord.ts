import { AttributeValue } from './Attributes';

export interface LogRecord {
  setAttribute(key: string, value?: AttributeValue): this;
}

export interface Event {
  setAttribute(key: string, value?: AttributeValue): this;
}
