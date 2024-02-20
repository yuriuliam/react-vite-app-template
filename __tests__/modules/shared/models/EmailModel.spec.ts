import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'

import { EmailModel } from '@/modules/shared/data/models/EmailModel'
import { parseZodErrors } from '@/modules/validation/infra/core/parseZodErrors'

describe('EmailModel', () => {
  it('should successfully parse consistent values', () => {
    const email = faker.internet.email()

    const result = EmailModel.safeParse(email)

    expect(result.success).toBeTruthy()
  })

  it('should fail parsing non-email values', () => {
    const emailFailModel = 'not-an-email'

    let emailError = null as ZodError | null

    try {
      EmailModel.parse(emailFailModel)
    } catch (error) {
      if (error instanceof ZodError) emailError = error
    }

    expect(emailError).not.toBe(null)
    expect(emailError!.issues).toHaveLength(1)

    const parsedErrors = parseZodErrors(emailError)

    expect(parsedErrors).toHaveProperty('zod')
    expect(parsedErrors.zod.at(0)).toBe('given email is not valid.')
  })
})
