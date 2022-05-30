import {
  API_BACKWARDS_COMPATIBILITY_VERSION,
  GLOBAL_EVENTS_API_KEY,
  _global,
  makeGetter
} from '../internal/global-utils';
import { EventEmitterProvider } from '../types/EventEmitterProvider';
import { NOOP_EVENT_EMITTER_PROVIDER } from '../NoopEventEmitterProvider';
import { EventEmitter } from '../types/EventEmitter';

export default class LogsAPI {
  private static _instance?: LogsAPI;

  private constructor() {}

  public static getInstance(): LogsAPI {
    if (!this._instance) {
      this._instance = new LogsAPI();
    }

    return this._instance;
  }

  public setGlobalEventEmitterProvider(provider: EventEmitterProvider): EventEmitterProvider {
    if (_global[GLOBAL_EVENTS_API_KEY]) {
      return this.getEventEmitterProvider();
    }

    _global[GLOBAL_EVENTS_API_KEY] = makeGetter<EventEmitterProvider>(
      API_BACKWARDS_COMPATIBILITY_VERSION,
      provider,
      NOOP_EVENT_EMITTER_PROVIDER
    );

    return provider;
  }

  public getEventEmitterProvider(): EventEmitterProvider {
    return (
      _global[GLOBAL_EVENTS_API_KEY]?.(API_BACKWARDS_COMPATIBILITY_VERSION) ??
      NOOP_EVENT_EMITTER_PROVIDER
    );
  }

  public getEventEmitter(name: string, version?: string): EventEmitter {
    return this.getEventEmitterProvider().getEventEmitter(name, version);
  }
}
