import {
  LOGGER_NAME_BASE,
  LOGGER_NAME_DEV,
  LOGGER_NAME_PROD,
} from '@/infra/logger/config/logger'

enum LoggerName {
  Base = LOGGER_NAME_BASE,
  Development = LOGGER_NAME_DEV,
  Production = LOGGER_NAME_PROD,
}

export { LoggerName }
