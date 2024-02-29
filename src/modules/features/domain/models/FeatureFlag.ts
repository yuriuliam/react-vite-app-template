import { z } from 'zod'

const FeatureFlagModel = z.string().startsWith('feature_')

export { FeatureFlagModel }
