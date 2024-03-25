import debug from 'debug'

import { LoggerName } from '../enums/LoggerName'
import { composeLoggerNamespace } from '../utils/composeLoggerNamespace'

const createStandardOutput: App.Domain.Logger.CreateStandardOutput = (
  baseNamespace,
  subNamespaces,
) => {
  const stdout = debug(LoggerName.Base).extend(baseNamespace)

  const finalNamespace = composeLoggerNamespace(...subNamespaces)

  return finalNamespace ? stdout.extend(finalNamespace) : stdout
}

export { createStandardOutput }
