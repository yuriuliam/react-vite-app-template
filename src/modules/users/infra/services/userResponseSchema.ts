import { UserResponseModel } from '@/modules/users/models/UserResponseModel'
import { createSchemaParser } from '@/modules/validation/data/core/createSchemaParser'
import { parseZodErrors } from '@/modules/validation/infra/core/parseZodErrors'

const userResponseSchemaParser = createSchemaParser(
  UserResponseModel,
  parseZodErrors,
)

export { userResponseSchemaParser }
