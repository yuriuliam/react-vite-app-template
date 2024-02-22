import { createSchemaParser } from '@/modules/validation/data/core/createSchemaParser'
import { parseZodErrors } from '@/modules/validation/infra/core/parseZodErrors'

import { AuthenticationParamsModel } from '../../models/AuthenticationParamsModel'

const authParamsSchema = createSchemaParser(
  AuthenticationParamsModel,
  parseZodErrors,
)

export { authParamsSchema }
