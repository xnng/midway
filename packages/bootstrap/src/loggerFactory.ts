import { LoggerFactory } from '@midwayjs/core';
import { loggers, LoggerOptions, IMidwayLogger } from '@midwayjs/logger';

export class MidwayLoggerFactory extends LoggerFactory<IMidwayLogger, LoggerOptions> {
  createLogger(name: string, options: LoggerOptions) {
    return loggers.createLogger(name, options) as IMidwayLogger;
  }
  getLogger(loggerName: string) {
    return loggers.getLogger(loggerName) as IMidwayLogger;
  }

  closeLogger(loggerName: string) {
    return loggers.close(loggerName);
  }

  close() {
    return loggers.close();
  }
}
