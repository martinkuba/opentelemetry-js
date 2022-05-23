
import { EventEmitterProvider } from '../types/EventEmitterProvider';
import { _globalThis } from '../platform';

export const GLOBAL_EVENTS_API_KEY = Symbol.for(
  'io.opentelemetry.js.api.events'
);

type Get<T> = (version: number) => T;
type OtelGlobal = Partial<{
  [GLOBAL_EVENTS_API_KEY]: Get<EventEmitterProvider>;
}>;

export const _global = _globalThis as OtelGlobal;

export function makeGetter<T>(
  requiredVersion: number,
  instance: T,
  fallback: T
): Get<T> {
  return (version: number): T =>
    version === requiredVersion ? instance : fallback;
}

export const API_BACKWARDS_COMPATIBILITY_VERSION = 4;
