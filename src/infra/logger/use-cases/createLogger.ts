import { createDebugger } from '../core/createDebugger'
import { createLoggerEventHandler } from '../core/createLoggerEventHandler'
import { createLoggerHandler } from '../core/createLogHandler'
import { createLogLevels } from '../core/createLogLevels'

type LoggerOptions = {
  baseNamespace: string
  formatTime: App.Domain.Intl.DateFormatter
}

const createLogger = (
  { baseNamespace, formatTime }: LoggerOptions,
  ...subNamespaces: string[]
) => {
  const eventHandler = createLoggerEventHandler()

  const appDebugger = createDebugger(baseNamespace, ...subNamespaces)
  const logHandler = createLoggerHandler(appDebugger, formatTime, eventHandler)
  const logHandlersByLevel = createLogLevels(logHandler)

  return {
    ...eventHandler,
    ...logHandlersByLevel,
  } satisfies App.Domain.Logger.ILogger
}

export { createLogger }
