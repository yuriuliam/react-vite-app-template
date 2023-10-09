import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'

import { emailModel } from '@/models/generics'

describe('emailModel', () => {
  it('should successfully parse consistent values', () => {
    const email = faker.internet.email()

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
    expect(emailError!.issues.at(0)!.message).toBe('given email is not valid.')
  })
})
