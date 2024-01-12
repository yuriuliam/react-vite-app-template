import { AuthenticationParamsModel } from '../../models/AuthenticationParamsModel'

import { createValidator } from '@/data/validation/core/createValidator'

import { parseZodErrors } from '@/infra/validation/core/parseZodErrors'

const validateAuthenticationParams = createValidator({
  model: AuthenticationParamsModel,
  parseErrors: parseZodErrors,
})

export { validateAuthenticationParams }
