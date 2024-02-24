import chalk from 'chalk'

import { createDebugger } from '../core/createDebugger'
import { createLoggerEventHandler } from '../core/createLoggerEventHandler'
import { createLoggerHandler } from '../core/createLogHandler'
import { createLogLevels } from '../core/createLogLevels'

import type { Formatter } from '@/shared/utils/strings'

type LoggerOptions = {
  baseNamespace: string
  formatTime: Formatter<number | Date | undefined>
}

const createLogger = (
  { baseNamespace, formatTime }: LoggerOptions,
  ...subNamespaces: string[]
) => {
  const eventHandler = createLoggerEventHandler()

  const appDebugger = createDebugger(baseNamespace, ...subNamespaces)
  const logHandler = createLoggerHandler(appDebugger, formatTime, eventHandler)
  const logHandlersByLevel = createLogLevels(logHandler)

  console.debug(`Logger created: %s`, chalk.yellow(appDebugger.namespace))

  return {
    ...eventHandler,
    ...logHandlersByLevel,
  } satisfies App.Domain.Logger.ILogger
}

export { createLogger }
