import { UserWithPasswordModel } from '@/modules/users/domain/models/UserWithPassword'

const AuthParamsModel = UserWithPasswordModel.pick({
  email: true,
  password: true,
})

export { AuthParamsModel }
