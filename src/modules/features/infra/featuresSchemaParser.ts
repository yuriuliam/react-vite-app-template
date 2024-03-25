import { createSchemaParser } from '@/data/validation/subjects/createSchemaParser'

import { parseModelErrors } from '@/infra/validation/parseModelErrors'

import { FeaturesResponseModel } from '../domain/models/FeaturesResponse'

const featuresSchemaParser = createSchemaParser(
  FeaturesResponseModel,
  parseModelErrors,
)

export { featuresSchemaParser }
