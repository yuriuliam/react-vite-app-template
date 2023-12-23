import { AuthenticationParamsModel } from '../../models'

import { createValidator } from '@/data/protocols/validation'

import { parseZodErrors } from '@/infra/protocols/validation/parseZodErrors'

const validateAuthenticationParams = createValidator({
  model: AuthenticationParamsModel,
  parseErrors: parseZodErrors,
})

export { validateAuthenticationParams }
