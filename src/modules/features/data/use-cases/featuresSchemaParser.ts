import { parseZodErrors } from '@/data/validation/protocols/parseZodErrors'

import { createSchemaParser } from '@/infra/validation/protocols/createSchemaParser'

import { FeaturesModel } from '../../domain/models/Features'

const featuresSchemaParser = createSchemaParser(FeaturesModel, parseZodErrors)

export { featuresSchemaParser }
