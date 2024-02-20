import { createModelSchema } from '@/modules/validation/data/core/createModelSchema'
import { parseZodErrors } from '@/modules/validation/infra/core/parseZodErrors'

import { AuthenticationParamsModel } from '../../models/AuthenticationParamsModel'

const authParamsSchema = createModelSchema(
  AuthenticationParamsModel,
  parseZodErrors,
)

export { authParamsSchema }
