import { createEventHandler } from '@/data/events/createEventHandler'

const createLoggerEventHandler = () =>
  createEventHandler<App.Domain.Logger.LogEvent>()

export { createLoggerEventHandler }
