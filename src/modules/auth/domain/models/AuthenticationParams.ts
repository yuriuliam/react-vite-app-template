import { UserWithPasswordModel } from '@/modules/users/domain/models/UserWithPassword'

const AuthenticationParamsModel = UserWithPasswordModel.pick({
  email: true,
  password: true,
})

export { AuthenticationParamsModel }
