
export * from './types/EventEmitter';
export * from './types/EventEmitterProvider';
export * from './types/Event';

import LogsAPI from './api/events';
export const logs = LogsAPI.getInstance();
