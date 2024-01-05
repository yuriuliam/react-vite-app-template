import { UserModel } from './UserModel'

import { TokenModel } from '@/shared/models/TokenModel'

const UserResponseModel = UserModel.extend({
  token: TokenModel.min(1, 'token is required.'),
})

export { UserResponseModel }
