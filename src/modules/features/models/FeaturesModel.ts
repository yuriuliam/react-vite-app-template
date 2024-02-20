import { z } from 'zod'

const FeaturesModel = z.array(z.string())

export { FeaturesModel }
