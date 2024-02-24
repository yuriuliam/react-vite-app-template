import { createEventHandler } from '@/infra/event/use-cases/createEventHandler'

const createLoggerEventHandler = () =>
  createEventHandler<App.Domain.Logger.LogEvent>()

export { createLoggerEventHandler }
