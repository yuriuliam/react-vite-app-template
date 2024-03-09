import chalk from 'chalk'

import { LogLevel } from '@/domain/logger/enums/LogLevel'

import { getMappedCallSites } from '@/shared/utils/runtime'

const createLoggerLevels = (handleLog: App.Domain.Logger.LogHandler) => {
  const error = (options: App.Domain.Logger.ErrorMessageOptions) => {
    void handleLog({
      ...options,
      title: chalk.red('Error (!)'),
      content: chalk.redBright(options.content),
      type: LogLevel.Error,
    })
  }

  const info = (options: App.Domain.Logger.MessageOptions) => {
    void handleLog({
      ...options,
      title: chalk.yellow(options.title),
      content: chalk.white(options.content),
      type: LogLevel.Info,
    })
  }

  const trace = (options: App.Domain.Logger.TraceMessageOptions) => {
    void handleLog({
      ...options,
      title: chalk.magenta('Stack Trace (?)'),
      data: getMappedCallSites().slice(1),
      type: LogLevel.Trace,
    })
  }

  const warn = (options: App.Domain.Logger.MessageOptions) => {
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
