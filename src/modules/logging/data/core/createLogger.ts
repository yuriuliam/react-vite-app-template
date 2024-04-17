import { createLoggerEventHandler } from '../base/createLoggerEventHandler'
import { createLoggerLevels } from '../base/createLoggerLevels'
import { createLoggerHandler } from '../base/createLogHandler'
import { createStandardOutput } from '../base/createStandardOutput'

const createLogger: App.Modules.Logging.CreateLoggerFn = (
  formatTime,
  baseNamespace,
  ...subNamespaces
) => {
  const eventHandler = createLoggerEventHandler()

  const stdout = createStandardOutput(baseNamespace, subNamespaces)
  const logHandler = createLoggerHandler(stdout, formatTime, eventHandler)
  const loggerLevels = createLoggerLevels(logHandler)

  return Object.assign({}, eventHandler, loggerLevels)
}

export { createLogger }
