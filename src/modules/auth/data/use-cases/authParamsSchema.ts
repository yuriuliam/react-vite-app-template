import { parseZodErrors } from '@/data/validation/protocols/parseZodErrors'

import { createSchemaParser } from '@/infra/validation/protocols/createSchemaParser'

import { AuthenticationParamsModel } from '../../domain/models/AuthenticationParams'

const authParamsSchema = createSchemaParser(
  AuthenticationParamsModel,
  parseZodErrors,
)

export { authParamsSchema }
