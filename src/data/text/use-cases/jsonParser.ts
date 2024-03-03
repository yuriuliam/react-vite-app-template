import { createJsonStringify } from '@/infra/text/use-cases/createJsonStringify'

import { standardArgsReplacer } from '@/shared/utils/json'

const jsonParser = createJsonStringify(standardArgsReplacer)

export { jsonParser }
