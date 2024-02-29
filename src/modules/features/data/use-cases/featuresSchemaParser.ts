import { parseZodErrors } from '@/data/validation/use-cases/parseZodErrors'

import { createSchemaParser } from '@/infra/validation/use-cases/createSchemaParser'

import { FeaturesResponseModel } from '../../domain/models/FeaturesResponse'

const featuresSchemaParser = createSchemaParser(
  FeaturesResponseModel,
  parseZodErrors,
)

export { featuresSchemaParser }
