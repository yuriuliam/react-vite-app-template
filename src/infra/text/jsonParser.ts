import { createJsonStringify } from '@/data/text/subjects/createJsonStringify'

import { standardArgsReplacer } from '@/shared/utils/json'

const jsonParser = createJsonStringify(standardArgsReplacer)

export { jsonParser }
