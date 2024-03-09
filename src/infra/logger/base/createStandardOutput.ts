import debug from 'debug'

import { LoggerName } from '@/domain/logger/enums/LoggerName'

import { LOGGER_DELIMITER } from '@/infra/logger/config/logger'

import { composeLoggerNamespace } from '../utils/composeLoggerNamespace'

const createStandardOutput = (
  baseNamespace: string,
  subNamespaces: string[],
) => {
  const stdout = debug(LoggerName.Base).extend(baseNamespace)

  const finalNamespace = composeLoggerNamespace(
    LOGGER_DELIMITER,
    ...subNamespaces,
  )

  return (
    finalNamespace ? stdout.extend(finalNamespace) : stdout
  ) satisfies App.Domain.Logger.StandardOutputFn
}

export { createStandardOutput }
