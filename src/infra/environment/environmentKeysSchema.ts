import { createSchemaParser } from '@/data/validation/subjects/createSchemaParser'

import { EnvironmentKeys } from '@/domain/environment/models/EnvironmentKeys'

import { parseModelErrors } from '../validation/parseModelErrors'

const environmentKeysSchema = createSchemaParser(
  EnvironmentKeys,
  parseModelErrors,
)

export { environmentKeysSchema }
