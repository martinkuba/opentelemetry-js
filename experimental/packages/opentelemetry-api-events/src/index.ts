
export * from './types/EventEmitter';
export * from './types/EventEmitterProvider';
export * from './types/Event';
export * from './types/EventEmitterOptions';

import EventsAPI from './api/events';
export const events = EventsAPI.getInstance();
