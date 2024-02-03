import type { LogLevel } from '@/data/logger/enums/logLevel'
import type { Debugger } from 'debug'

declare global {
  declare namespace App.Infra.Logger {
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

    type AppOutput = Debugger

    type LogHandler = (options: InternalMessageOptions) => Promise<void>

    interface ILogger {
      error: (options: ErrorMessageOptions) => void
      log: (options: MessageOptions) => void
      trace: (options: TraceMessageOptions) => void
      warn: (options: MessageOptions) => void
    }

    type LogEvent = Omit<InternalMessageOptions, 'style'>
  }
}

export = global
