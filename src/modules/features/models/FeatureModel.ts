import { z } from 'zod'

const FeatureModel = z.string().min(1, 'feature flags should not be empty')

export { FeatureModel }
