import { z } from 'zod'

const EmailModel = z.string().email('given email is not valid.')

export { EmailModel }
