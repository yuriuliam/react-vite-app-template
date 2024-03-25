import { createJsonStringify } from '@/data/text/subjects/createJsonStringify'

import { BEAUTIFUL_JSON_INDENT_SIZE } from '@/shared/config/json'
import { standardArgsReplacer } from '@/shared/utils/json'

const beautifiedJsonParser = createJsonStringify(
  standardArgsReplacer,
  BEAUTIFUL_JSON_INDENT_SIZE,
)

export { beautifiedJsonParser }
