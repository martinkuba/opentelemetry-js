
export * from './types/EventEmitter';
export * from './types/EventEmitterProvider';
export * from './types/Event';

import EventsAPI from './api/events';
export const events = EventsAPI.getInstance();
