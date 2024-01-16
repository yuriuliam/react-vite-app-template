import { createValidator } from '@/data/validation/core/createValidator'

import { parseZodErrors } from '@/infra/validation/core/parseZodErrors'

import { AuthenticationParamsModel } from '../../models/AuthenticationParamsModel'

const validateAuthenticationParams = createValidator({
  model: AuthenticationParamsModel,
  parseErrors: parseZodErrors,
})

export { validateAuthenticationParams }
