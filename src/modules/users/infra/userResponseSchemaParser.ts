import { createSchemaParser } from '@/data/validation/subjects/createSchemaParser'

import { parseModelErrors } from '@/infra/validation/parseModelErrors'

import { UserResponseModel } from '../domain/models/UserResponse'

const userResponseSchemaParser = createSchemaParser(
  UserResponseModel,
  parseModelErrors,
)

export { userResponseSchemaParser }
