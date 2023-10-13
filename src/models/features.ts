import { z } from 'zod'

const featuresResponseModel = z.array(
  z.string().nonempty('feature flags should not be empty'),
)

export { featuresResponseModel }
