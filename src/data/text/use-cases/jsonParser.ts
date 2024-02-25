import { createStringParser } from '@/infra/text/use-cases/createStringParser'

import { standardArgsReplacer } from '@/shared/utils/json'

const jsonParser = createStringParser((value: any) =>
  JSON.stringify(value, standardArgsReplacer),
)

export { jsonParser }
