import { createModelSchema } from '@/modules/validation/data/core/createModelSchema'
import { parseZodErrors } from '@/modules/validation/infra/core/parseZodErrors'

import { FeaturesModel } from '../../models/FeaturesModel'

const featuresSchema = createModelSchema(FeaturesModel, parseZodErrors)

export { featuresSchema }
