import { AttributeValue } from '@opentelemetry/api';

export interface Event {
  /**
   * The event name.
   * @default ''
   */
  name: string;

   /**
   * Sets an attribute to the event.
   *
   * Sets a single Attribute with the key and value passed as arguments.
   *
   * @param key the key for this attribute.
   * @param value the value for this attribute. Setting a value null or
   *              undefined is invalid and will result in undefined behavior.
   */
  setAttribute(key: string, value?: AttributeValue): this;
}
