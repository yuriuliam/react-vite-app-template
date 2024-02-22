import { createSchemaParser } from '@/modules/validation/data/core/createSchemaParser'
import { parseZodErrors } from '@/modules/validation/infra/core/parseZodErrors'

import { FeaturesModel } from '../../models/FeaturesModel'

const featuresSchemaParser = createSchemaParser(FeaturesModel, parseZodErrors)

export { featuresSchemaParser }
