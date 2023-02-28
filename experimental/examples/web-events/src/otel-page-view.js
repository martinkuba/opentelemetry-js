import { EventEmitter } from '@opentelemetry/sdk-events';

const logger = new EventEmitter({
  name: 'navigation',
  domain: 'browser'
});

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

  logger.emit({
    name: 'navigation',
    attributes: attributes
  });
});
