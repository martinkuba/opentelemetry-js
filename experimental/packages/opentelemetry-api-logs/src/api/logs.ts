import {
  API_BACKWARDS_COMPATIBILITY_VERSION,
  GLOBAL_LOGS_API_KEY,
  _global,
  makeGetter
} from '../internal/global-utils';
import { LogEmitterProvider } from '../types/LogEmitterProvider';
import { NOOP_LOG_EMITTER_PROVIDER } from '../NoopLogEmitterProvider';
import { LogEmitter } from '../types/LogEmitter';

export default class LogsAPI {
  private static _instance?: LogsAPI;

  private constructor() {}

  public static getInstance(): LogsAPI {
    if (!this._instance) {
      this._instance = new LogsAPI();
    }

    return this._instance;
  }

  public setGlobalLogEmitterProvider(provider: LogEmitterProvider): LogEmitterProvider {
    if (_global[GLOBAL_LOGS_API_KEY]) {
      return this.getLogEmitterProvider();
    }

    _global[GLOBAL_LOGS_API_KEY] = makeGetter(
      API_BACKWARDS_COMPATIBILITY_VERSION,
      provider,
      NOOP_LOG_EMITTER_PROVIDER
    );

    return provider;
  }

  public getLogEmitterProvider(): LogEmitterProvider {
    return (
      _global[GLOBAL_LOGS_API_KEY]?.(API_BACKWARDS_COMPATIBILITY_VERSION) ??
      NOOP_LOG_EMITTER_PROVIDER
    );
  }

  public getLogEmitter(name: string, version?: string): LogEmitter {
    return this.getLogEmitterProvider().getLogEmitter(name, version);
  }
}
