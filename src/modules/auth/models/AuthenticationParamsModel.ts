import { UserWithPasswordModel } from '@/modules/users/models/UserWithPasswordModel'

const AuthenticationParamsModel = UserWithPasswordModel.pick({
  email: true,
  password: true,
})

export { AuthenticationParamsModel }
