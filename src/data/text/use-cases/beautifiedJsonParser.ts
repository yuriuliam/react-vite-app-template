import { BEAUTIFUL_JSON_INDENT_SIZE } from '@/config/json'

import { createStringParser } from '@/infra/text/use-cases/createStringParser'

import { standardArgsReplacer } from '@/shared/utils/json'

const beautifiedJsonParser = createStringParser(value =>
  JSON.stringify(value, standardArgsReplacer, BEAUTIFUL_JSON_INDENT_SIZE),
)

export { beautifiedJsonParser }
