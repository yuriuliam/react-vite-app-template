import { z } from 'zod'

const featuresModel = z.array(
  z.string().nonempty('feature flags should not be empty'),
)

export { featuresModel }
