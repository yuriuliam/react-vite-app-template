import chalk from 'chalk'
import stripAnsi from 'strip-ansi'

import type { Formatter } from '@/shared/utils/strings'

const createLoggerHandler = (
  appOutput: App.Infra.Logger.AppOutput,
  formatTime: Formatter<number | Date | undefined>,
  eventHandler?:
    | App.Infra.Event.EventHandler<App.Infra.Logger.LogEvent>
    | null
    | undefined,
): App.Infra.Logger.LogHandler => {
  return async (options: App.Infra.Logger.InternalMessageOptions) => {
    const name = chalk.bold.green(options.name ?? 'Unknown')
    const title = chalk.bold(options.title)
    const content = chalk.italic(options.content)
    const now = formatTime(Date.now())

    const data =
      options.data instanceof Promise ? await options.data : options.data

    eventHandler?.dispatchEvent?.({
      content: stripAnsi(options.content),
      title: stripAnsi(options.title),
      type: options.type,
      data,
      name: options.name ? stripAnsi(options.name) : undefined,
    })

    if (typeof data !== 'undefined') {
      const isInline = !!options.style && options.style === 'inline'

      const dataFormatter = isInline
        ? '%s | [%s] %s - %s\n=============================================\n%s'
        : '%s | [%s] %s - %s\n=============================================\n%O'

      const payload = isInline
        ? chalk.blackBright(JSON.stringify(data, null, 2))
        : data

      appOutput(dataFormatter, now, name, title, content, payload)

      return
    }

    appOutput('%s | [%s] %s - %s', now, name, title, content)
  }
}

export { createLoggerHandler }
