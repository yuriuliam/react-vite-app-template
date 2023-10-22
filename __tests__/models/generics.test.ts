import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'

import { emailModel } from '@/models/generics'

import { createFakeEmail } from '@/utils/faker'
import { parseZodErrors } from '@/utils/zod'

describe('emailModel', () => {
  it('should successfully parse consistent values', () => {
    const email = createFakeEmail()

    const result = emailModel.safeParse(email)

    expect(result.success).toBeTruthy()
  })

  it('should fail parsing non-email values', () => {
    const emailFailModel = 'not-an-email'

    let emailError = null as ZodError | null

    try {
      emailModel.parse(emailFailModel)
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
