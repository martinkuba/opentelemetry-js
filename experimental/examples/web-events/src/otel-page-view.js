import { events } from '@opentelemetry/api-events';

const emitter = events.getEventEmitter('navigation', 'browser');

window.addEventListener('load', () => {
  const entry = window.performance.getEntriesByType('navigation')[0];

  const attributes = {
    "event.data": {}
  };
  for (let key in entry) {
    if (typeof entry[key] === 'number') {
      attributes['event.data'][key] = entry[key];
    }
  }

  emitter.emit({
    name: 'navigation',
    attributes: attributes
  });
});
