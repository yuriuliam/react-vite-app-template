import { z } from 'zod'

const emailModel = z.string().email('given email is not valid.')

export { emailModel }
