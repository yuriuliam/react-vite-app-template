import { z } from 'zod'

const featuresResponseModel = z.array(
  z.string().min(1, 'feature flags should not be empty'),
)

export { featuresResponseModel }
