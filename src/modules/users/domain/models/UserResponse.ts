import { TokenModel } from '@/domain/commons/models/Token'

import { UserModel } from './User'

const UserResponseModel = UserModel.extend({
  token: TokenModel.min(1, 'token is required.'),
})

export { UserResponseModel }
