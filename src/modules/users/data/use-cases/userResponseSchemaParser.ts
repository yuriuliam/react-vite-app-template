import { parseZodErrors } from '@/data/validation/protocols/parseZodErrors'

import { createSchemaParser } from '@/infra/validation/protocols/createSchemaParser'

import { UserResponseModel } from '../../domain/models/UserResponse'

const userResponseSchemaParser = createSchemaParser(
  UserResponseModel,
  parseZodErrors,
)

export { userResponseSchemaParser }
