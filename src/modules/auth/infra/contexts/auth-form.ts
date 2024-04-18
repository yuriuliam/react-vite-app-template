import { createForm } from '@/data/forms/subjects/createForm'

import { AuthParamsModel } from '../../domain/models/AuthParamsModel'

const AUTH_FORM_NAME = 'Modules.Auth.Form'

const [AuthForm, useAuthForm] = createForm(
  { schema: AuthParamsModel },
  AUTH_FORM_NAME,
)

export { AuthForm, useAuthForm }
