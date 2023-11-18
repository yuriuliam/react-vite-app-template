import { z } from 'zod'

const TokenModel = z.string().min(1, 'token should be fulfilled.')

export { TokenModel }
