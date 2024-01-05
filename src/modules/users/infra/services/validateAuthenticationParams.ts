import { AuthenticationParamsModel } from '../../models/AuthenticationParamsModel'

import { createValidator } from '@/data/protocols/validation/createValidator'

import { parseZodErrors } from '@/infra/protocols/validation/parseZodErrors'

const validateAuthenticationParams = createValidator({
  model: AuthenticationParamsModel,
  parseErrors: parseZodErrors,
})

export { validateAuthenticationParams }
