import { z } from 'zod'

const FeaturesModel = z.array(z.string().startsWith('feature_'))

export { FeaturesModel }
