import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'

import { TokenModel } from '@/modules/shared/data/models/TokenModel'
import { parseZodErrors } from '@/modules/validation/infra/core/parseZodErrors'

describe('TokenModel', () => {
  it('should successfully parse consistent values', () => {
    const token = faker.string.nanoid(64)

    const result = TokenModel.safeParse(token)

    expect(result.success).toBeTruthy()
  })

  it('should fail parsing non-string values', () => {
    const token = Symbol.for('not-a-token')

    let tokenError = null as ZodError | null

    try {
      TokenModel.parse(token)
    } catch (error) {
      if (error instanceof ZodError) tokenError = error
    }

    expect(tokenError).not.toBe(null)
    expect(tokenError!.issues).toHaveLength(1)

    const parsedErrors = parseZodErrors(tokenError)

    expect(parsedErrors).toHaveProperty('zod')
    expect(parsedErrors.zod.at(0)).toBe('Expected string, received symbol')
  })
})
