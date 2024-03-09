import { createLoggerEventHandler } from '../base/createLoggerEventHandler'
import { createLoggerLevels } from '../base/createLoggerLevels'
import { createLoggerHandler } from '../base/createLogHandler'
import { createStandardOutput } from '../base/createStandardOutput'

const createLogger = (
  formatTime: App.Domain.Intl.DateFormatter,
  baseNamespace: string,
  ...subNamespaces: string[]
) => {
  const eventHandler = createLoggerEventHandler()

  const stdout = createStandardOutput(baseNamespace, subNamespaces)
  const logHandler = createLoggerHandler(stdout, formatTime, eventHandler)
  const loggerLevels = createLoggerLevels(logHandler)

  return Object.assign(
    {},
    eventHandler,
    loggerLevels,
  ) satisfies App.Domain.Logger.ILogger
}

export { createLogger }
