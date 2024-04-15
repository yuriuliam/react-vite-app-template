import { createEventHandler } from '@/data/events/createEventHandler'

const createLoggerEventHandler = () =>
  createEventHandler<App.Domain.Logging.LogEvent>()

export { createLoggerEventHandler }
