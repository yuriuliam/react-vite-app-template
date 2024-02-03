import { createEventHandler } from '@/data/event/core/createEventHandler'

const loggerEventHandler = createEventHandler<App.Infra.Logger.LogEvent>()

export { loggerEventHandler }
