import { LogRecord } from "../LogRecord";
import { InstrumentationLibrary } from '@opentelemetry/core';

export class LogData {
  logRecord: LogRecord;
  instrumentationLibrary: InstrumentationLibrary;

  constructor(
    logRecord: LogRecord,
    instrumentationLibrary: InstrumentationLibrary
  ) {
    this.logRecord = logRecord;
    this.instrumentationLibrary = instrumentationLibrary;
  }
}
