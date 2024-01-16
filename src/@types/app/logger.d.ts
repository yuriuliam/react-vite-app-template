import { type Debugger } from 'debug'

declare global {
  declare namespace App.Infra.Logger {
    type MessagePayload = App.ObjectType

    type MessageOptions = {
      name?: string
      title: string
      content: string
      data?: App.MaybePromise<MessagePayload | null> | undefined
      style?: 'default' | 'inline' | undefined
    }

    type ErrorMessageOptions = Omit<MessageOptions, 'title'>
    type TraceMessageOptions = Omit<MessageOptions, 'title' | 'data'>

    type AppOutput = Debugger

    type InternalOutput = (options: MessageOptions) => Promise<void>

    interface ILogger {
      error: (options: ErrorMessageOptions) => void
      log: (options: MessageOptions) => void
      trace: (options: TraceMessageOptions) => void
      warn: (options: MessageOptions) => void
    }
  }
}

export = global
