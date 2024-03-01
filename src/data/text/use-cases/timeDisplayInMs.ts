import { TimeUnit } from '@/domain/text/enums/TimeUnit'

import { createTimeDisplay } from '@/infra/text/use-cases/createTimeDisplay'

const timeDisplayInMs = createTimeDisplay(TimeUnit.Milliseconds)

export { timeDisplayInMs }