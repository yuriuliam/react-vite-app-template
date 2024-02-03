import chalk from 'chalk'

import { createDebugger } from '../base/createDebugger'
import { createLoggerHandler } from '../base/createLogHandler'
import { createLogHandlersByLevel } from '../base/createLogHandlersByLevel'

type LoggerOptions = {
  baseNamespace: string
  eventHandler?: App.Infra.Event.EventHandler<App.Infra.Logger.LogEvent>
}

const createLogger = (
  { baseNamespace, eventHandler: _observers }: LoggerOptions,
  ...subNamespaces: string[]
): App.Infra.Logger.ILogger => {
  const appDebugger = createDebugger(baseNamespace, ...subNamespaces)
  const logHandler = createLoggerHandler(appDebugger)
  const logHandlersByLevel = createLogHandlersByLevel(logHandler)

  console.debug(`Logger created: %s`, chalk.yellow(appDebugger.namespace))

  return {
    ...logHandlersByLevel,
  }
}

export { createLogger }
