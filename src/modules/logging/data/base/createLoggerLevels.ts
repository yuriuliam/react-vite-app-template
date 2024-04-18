import chalk from 'chalk'

import { getMappedCallSites } from '@/shared/utils/runtime'

import { LogLevel } from '../enums/LogLevel'

type CreateLoggerLevelsFn = App.Modules.Logging.CreateLoggerLevelsFn

const createLoggerLevels: CreateLoggerLevelsFn = handleLog => {
  const error: App.Modules.Logging.ErrorLevelFn = options => {
    void handleLog({
      ...options,
      title: chalk.red('Error (!)'),
      content: chalk.redBright(options.content),
      type: LogLevel.Error,
    })
  }

  const info: App.Modules.Logging.InfoLevelFn = options => {
    void handleLog({
      ...options,
      title: chalk.yellow(options.title),
      content: chalk.white(options.content),
      type: LogLevel.Info,
    })
  }

  const trace: App.Modules.Logging.TraceLevelFn = options => {
    void handleLog({
      ...options,
      title: chalk.magenta('Stack Trace (?)'),
      data: getMappedCallSites().slice(1),
      type: LogLevel.Trace,
    })
  }

  const warn: App.Modules.Logging.WarnLevelFn = options => {
    void handleLog({
      ...options,
      title: chalk.hex('FFAA00')(options.title),
      content: chalk.white(options.content),
      type: LogLevel.Warn,
    })
  }

  return {
    error,
    info,
    trace,
    warn,
  }
}

export { createLoggerLevels }
