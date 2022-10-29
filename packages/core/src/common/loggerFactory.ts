import { ILogger } from '../interface';

export abstract class LoggerFactory<Logger extends ILogger, LoggerOptions> {
  abstract createLogger(name: string, options): Logger;
  abstract getLogger(loggerName: string);
  abstract closeLogger(loggerName: string);
  abstract close();
}

export class ConsoleLoggerFactory extends LoggerFactory<any, any> {
  createLogger(name: string, options): any {
    return console;
  }

  getLogger(loggerName: string) {
    return console;
  }

  close() {
  }

  closeLogger(loggerName: string) {
  }
}
