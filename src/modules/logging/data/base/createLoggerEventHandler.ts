import { createEventHandler } from '@/data/events/createEventHandler'

const createLoggerEventHandler = () =>
  createEventHandler<App.Modules.Logging.LogEvent>()

export { createLoggerEventHandler }
