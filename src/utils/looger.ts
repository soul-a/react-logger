export interface LogFn {
  (message?: unknown, ...optionalParameters: unknown[]): void;
}

export interface Logger {
  log: LogFn;
  warn: LogFn;
  error: LogFn;
}

/** Log levels */
export type LogLevel = "log" | "warn" | "error";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NO_OP: LogFn = (_message?: unknown, ..._optionalParams: unknown[]) => {
  return;
};

/** Default log level */
export const LOG_LEVEL = import.meta.env.PROD ? "warn" : "log";

export class ConsoleLogger implements Logger {
  readonly log: LogFn;
  readonly warn: LogFn;
  readonly error: LogFn;

  constructor(options?: { level?: LogLevel }) {
    const { level } = options || { level: LOG_LEVEL };

    this.error = console.error.bind(console);

    if (level === "error") {
      this.warn = NO_OP;
      this.log = NO_OP;

      return;
    }

    this.warn = console.warn.bind(console);

    if (level === "warn") {
      this.log = NO_OP;

      return;
    }

    this.log = console.log.bind(console);
  }
}

export const logger = new ConsoleLogger();
