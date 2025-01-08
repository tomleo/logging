/**
 * @module
 *
 * This module contains a createLogger function which wraps console.log only
 * outputting log statements at or above the passed in log-level
 *
 * @example
 * ```ts
 * import * as logging from "jsr:@tomleo/logging";
 * const logger = logging.createLogger(logging.DEBUG)
 * logger.debug("Hello World");
 * ```
 */

// deno-lint-ignore-file no-explicit-any
export const DEBUG = 10;
export const INFO = 20;
export const WARNING = 30;
export const ERROR = 40;
export const CRITICAL = 50;

type Levels =
  | typeof DEBUG
  | typeof INFO
  | typeof WARNING
  | typeof ERROR
  | typeof CRITICAL;

type Logger = {
  debug(...msgs: any[]): void;
  info(...msg: any[]): void;
  warning(...msgs: any[]): void;
  error(...msgs: any[]): void;
  critical(...msgs: any[]): void;
};

/**
 * @param level The log level for this instance
 * @returns Logger object
 */
export function createLogger(level: Levels): Logger {
  return {
    debug(...msgs: any[]): void {
      if (level <= DEBUG) {
        console.log(...msgs);
      }
    },
    info(...msg: any[]): void {
      if (level <= INFO) {
        console.log(...msg);
      }
    },
    warning(...msgs: any[]): void {
      if (level <= WARNING) {
        console.log(...msgs);
      }
    },
    error(...msgs: any[]): void {
      if (level <= ERROR) {
        console.log(...msgs);
      }
    },
    critical(...msgs: any[]): void {
      if (level <= CRITICAL) {
        console.log(...msgs);
      }
    },
  };
}
