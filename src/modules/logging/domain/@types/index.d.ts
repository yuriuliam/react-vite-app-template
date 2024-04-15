import { type Debugger } from 'debug'

import { type LogLevel } from '@/modules/logger/enums/logLevel'

type LogLevelFn<T> = (options: T) => void
type LogHandlerFn = (options: InternalMessageOptions) => Promise<void>
type StandardOutputFn = Debugger

declare global {
  declare namespace App.Domain.Logging {
    type MessagePayload = App.ObjectType

    type InternalMessageOptions = {
      name?: string
      title: string
      content: string
      data?: App.MaybePromise<MessagePayload | null> | undefined
      style?: 'default' | 'inline' | undefined
      type: LogLevel
    }

    type MessageOptions = Omit<InternalMessageOptions, 'type'>
    type ErrorMessageOptions = Omit<MessageOptions, 'title'>
    type TraceMessageOptions = Omit<MessageOptions, 'title' | 'data'>

    type LogEvent = Omit<InternalMessageOptions, 'style'>

    type ErrorLevelFn = LogLevelFn<ErrorMessageOptions>
    type InfoLevelFn = LogLevelFn<MessageOptions>
    type TraceLevelFn = LogLevelFn<TraceMessageOptions>
    type WarnLevelFn = LogLevelFn<MessageOptions>

    interface ILoggerLevels {
      error: ErrorLevelFn
      info: InfoLevelFn
      trace: TraceLevelFn
      warn: WarnLevelFn
    }

    interface ILogger extends ILoggerLevels, Event.IEventHandler<LogEvent> {}

    type LoggerFactoryFn = (...namespace: string[]) => ILogger

    type CreateLoggerLevels = (handleLog: LogHandlerFn) => ILoggerLevels

    type CreateLogHandler = (
      stdout: StandardOutputFn,
      formatTime: Intl.DateFormatter,
      eventHandler: Event.IEventHandler<LogEvent>,
    ) => LogHandlerFn

    type CreateStandardOutput = (
      baseNamespace: string,
      subNamespaces: string[],
    ) => StandardOutputFn

    type CreateLoggerFn = (
      formatTime: Intl.DateFormatter,
      baseNamespace: string,
      ...subNamespaces: string[]
    ) => ILogger

    type CreateLoggerInjectorFn = (
      formatTime: Intl.DateFormatter,
      isDev: boolean,
    ) => App.InjectorFn
  }
}

export = global
