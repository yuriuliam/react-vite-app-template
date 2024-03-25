import { createSchemaParser } from '@/data/validation/subjects/createSchemaParser'

import { parseModelErrors } from '@/infra/validation/parseModelErrors'

import { AuthenticationParamsModel } from '../domain/models/AuthenticationParams'

const authParamsSchema = createSchemaParser(
  AuthenticationParamsModel,
  parseModelErrors,
)

export { authParamsSchema }
