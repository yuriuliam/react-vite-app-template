import chalk from 'chalk'
import stripAnsi from 'strip-ansi'

const createLoggerHandler: App.Domain.Logger.CreateLogHandler = (
  stdout,
  formatTime,
  eventHandler,
) => {
  return async options => {
    const name = chalk.bold.green(options.name ?? 'Unknown')
    const title = chalk.bold(options.title)
    const content = chalk.italic(options.content)
    const now = formatTime(Date.now())

    const data =
      options.data instanceof Promise ? await options.data : options.data

    eventHandler.dispatchEvent({
      content: stripAnsi(content),
      data,
      title: stripAnsi(title),
      type: options.type,
      name: options.name ? stripAnsi(options.name) : undefined,
    })

    if (typeof data !== 'undefined') {
      const isInline = !!options.style && options.style === 'inline'

      const dataFormatter = isInline
        ? '\n\n%s - %s | %s - %s\n>>>\n%s\n<<<'
        : '\n\n%s - %s | %s - %s\n>>>\n%o\n<<<'

      const payload = isInline
        ? chalk.blackBright(JSON.stringify(data, null, 2))
        : data

      stdout(dataFormatter, now, name, title, content, payload)

      return
    }

    stdout('%s | [%s] %s - %s', now, name, title, content)
  }
}

export { createLoggerHandler }
