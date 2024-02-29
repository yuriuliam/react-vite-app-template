import { parseZodErrors } from '@/data/validation/use-cases/parseZodErrors'

import { createSchemaParser } from '@/infra/validation/use-cases/createSchemaParser'

import { AuthenticationParamsModel } from '../../domain/models/AuthenticationParams'

const authParamsSchema = createSchemaParser(
  AuthenticationParamsModel,
  parseZodErrors,
)

export { authParamsSchema }
