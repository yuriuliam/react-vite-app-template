import {
  LOGGER_DELIMITER,
  LOGGER_FULL_NAME_DEV,
  LOGGER_FULL_NAME_PROD,
  LOGGER_NAME_DEV,
  LOGGER_NAME_PROD,
} from '../config/logger'
import { concatLoggerNames } from '../utils/concatLoggerNames'

type LoggerNameType = 'all' | 'base' | 'children'
type SupportedEnvironments = 'dev' | 'prod'

const NAME_BY_ENVIRONMENT = Object.freeze({
  dev: [LOGGER_FULL_NAME_DEV, LOGGER_NAME_DEV],
  prod: [LOGGER_FULL_NAME_PROD, LOGGER_NAME_PROD],
} satisfies Record<SupportedEnvironments, [fullName: string, name: string]>)

const getInternalLoggerName = (
  environment: SupportedEnvironments,
  type: LoggerNameType,
) => {
  const [fullName] = Reflect.get(NAME_BY_ENVIRONMENT, environment)

  const base = fullName
  const children = [fullName, '*'].join(LOGGER_DELIMITER)

  const typeList = {
    all: concatLoggerNames(base, children),
    base,
    children,
  } satisfies Record<LoggerNameType, string>

  return Reflect.get(typeList, type)
}

export { getInternalLoggerName }
