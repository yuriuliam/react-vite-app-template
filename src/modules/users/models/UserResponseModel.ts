import { TokenModel } from '@/modules/shared/data/models/TokenModel'

import { UserModel } from './UserModel'

const UserResponseModel = UserModel.extend({
  token: TokenModel.min(1, 'token is required.'),
})

export { UserResponseModel }
