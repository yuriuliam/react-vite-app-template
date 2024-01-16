import { TokenModel } from '@/shared/models/TokenModel'

import { UserModel } from './UserModel'

const UserResponseModel = UserModel.extend({
  token: TokenModel.min(1, 'token is required.'),
})

export { UserResponseModel }
