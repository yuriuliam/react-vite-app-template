import { parseZodErrors } from '@/data/validation/use-cases/parseZodErrors'

import { createSchemaParser } from '@/infra/validation/use-cases/createSchemaParser'

import { UserResponseModel } from '../../domain/models/UserResponse'

const userResponseSchemaParser = createSchemaParser(
  UserResponseModel,
  parseZodErrors,
)

export { userResponseSchemaParser }
