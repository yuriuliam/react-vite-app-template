import { z } from 'zod'

const FeaturesModel = z.array(
  z.string().min(1, 'feature flags should not be empty'),
)

export { FeaturesModel }
