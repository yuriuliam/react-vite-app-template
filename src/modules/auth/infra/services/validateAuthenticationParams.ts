import { createModelValidator } from '@/data/validation/core/createModelValidator'

import { parseZodErrors } from '@/infra/validation/core/parseZodErrors'

import { AuthenticationParamsModel } from '../../models/AuthenticationParamsModel'

const validateAuthenticationParams = createModelValidator({
  model: AuthenticationParamsModel,
  parseErrors: parseZodErrors,
})

export { validateAuthenticationParams }
