import { TimeUnit } from '@/domain/text/enums/TimeUnit'

import { createTimeDisplay } from '@/infra/text/use-cases/createTimeDisplay'

const timeDisplayByMs = createTimeDisplay(TimeUnit.Milliseconds)

export { timeDisplayByMs }
