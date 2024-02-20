import chalk from 'chalk'

import { getMappedCallSites } from '@/shared/utils/runtime'

import { LogLevel } from '../enums/logLevel'

const createLogHandlersByLevel = (handleLog: App.Modules.Logger.LogHandler) => {
  const error = (options: App.Modules.Logger.ErrorMessageOptions) => {
    void handleLog({
      ...options,
      title: chalk.red('Error (!)'),
      content: chalk.redBright(options.content),
      type: LogLevel.ERROR,
    })
  }

  const log = (options: App.Modules.Logger.MessageOptions) => {
    void handleLog({
      ...options,
      title: chalk.yellow(options.title),
      content: chalk.white(options.content),
      type: LogLevel.LOG,
    })
  }

  const trace = (options: App.Modules.Logger.TraceMessageOptions) => {
    void handleLog({
      ...options,
      title: chalk.magenta('Stack Trace (?)'),
      data: getMappedCallSites().slice(1),
      type: LogLevel.TRACE,
    })
  }

  const warn = (options: App.Modules.Logger.MessageOptions) => {
    void handleLog({
      ...options,
      title: chalk.hex('FFAA00')(options.title),
      content: chalk.white(options.content),
      type: LogLevel.WARN,
    })
  }

  return {
    error,
    log,
    trace,
    warn,
  }
}

export { createLogHandlersByLevel }
