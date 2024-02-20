import { UserResponseModel } from '@/modules/users/models/UserResponseModel'
import { createModelSchema } from '@/modules/validation/data/core/createModelSchema'
import { parseZodErrors } from '@/modules/validation/infra/core/parseZodErrors'

const userResponseSchema = createModelSchema(UserResponseModel, parseZodErrors)

export { userResponseSchema }
