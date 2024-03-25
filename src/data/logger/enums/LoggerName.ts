import {
  LOGGER_NAME_BASE,
  LOGGER_NAME_DEV,
  LOGGER_NAME_PROD,
} from '../config/logger'

enum LoggerName {
  /** @deprecated Internal use only; It may change with the time. */
  Base = LOGGER_NAME_BASE,
  Development = LOGGER_NAME_DEV,
  Production = LOGGER_NAME_PROD,
}

export { LoggerName }
