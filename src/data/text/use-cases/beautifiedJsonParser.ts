import { BEAUTIFUL_JSON_INDENT_SIZE } from '@/config/json'

import { createJsonStringify } from '@/infra/text/use-cases/createJsonStringify'

import { standardArgsReplacer } from '@/shared/utils/json'

const beautifiedJsonParser = createJsonStringify(
  standardArgsReplacer,
  BEAUTIFUL_JSON_INDENT_SIZE,
)

export { beautifiedJsonParser }
