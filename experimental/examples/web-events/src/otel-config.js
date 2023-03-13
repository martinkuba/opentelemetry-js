import { logs } from '@opentelemetry/api-logs';
import { ConsoleLogRecordExporter, LoggerProvider, SimpleLogRecordProcessor } from '@opentelemetry/sdk-logs';
import { events } from '@opentelemetry/api-events';
import { EventEmitterProvider } from '@opentelemetry/sdk-events';

// configure logging provider, since the events provider depends on it internally
const loggerProvider = new LoggerProvider();
loggerProvider.addLogRecordProcessor(new SimpleLogRecordProcessor(new ConsoleLogRecordExporter()));
logs.setGlobalLoggerProvider(loggerProvider);

const eventEmitterProvider = new EventEmitterProvider();
events.setGlobalEventEmitterProvider(eventEmitterProvider);
