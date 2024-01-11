import { AuthenticationParamsModel } from '../../models/AuthenticationParamsModel'

import { createValidator } from '@/data/validation/createValidator'

import { parseZodErrors } from '@/infra/validation/parseZodErrors'

const validateAuthenticationParams = createValidator({
  model: AuthenticationParamsModel,
  parseErrors: parseZodErrors,
})

export { validateAuthenticationParams }
