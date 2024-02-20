import { createEventHandler } from '@/modules/event/data/core/createEventHandler'

const loggerEventHandler = createEventHandler<App.Modules.Logger.LogEvent>()

export { loggerEventHandler }
