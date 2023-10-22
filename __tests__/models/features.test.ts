import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'

import { featuresResponseModel } from '@/models/features'

import { createFakeFeaturesResponse } from '@/utils/faker'
import { parseZodErrors } from '@/utils/zod'

describe('featuresResponseModel', () => {
  it('should successfully parse consistent values', () => {
    const featuresResponse = createFakeFeaturesResponse()

    const result = featuresResponseModel.safeParse(featuresResponse)

    expect(result.success).toBeTruthy()
  })

  it('should successfully parse empty arrays', () => {
    const featuresResponse = [] as string[]

    const result = featuresResponseModel.safeParse(featuresResponse)

    expect(result.success).toBeTruthy()
  })

  it('should fail parsing non-array values', () => {
    const featuresResponse = {}

    let featuresResponseError = null as ZodError | null

    try {
      featuresResponseModel.parse(featuresResponse)
    } catch (error) {
      if (error instanceof ZodError) featuresResponseError = error
    }

    expect(featuresResponseError).not.toBe(null)
    expect(featuresResponseError!.issues).toHaveLength(1)

    const parsedErrors = parseZodErrors(featuresResponseError)

    expect(parsedErrors).toHaveProperty('zod')
    expect(parsedErrors.zod.at(0)).toBe('Expected array, received object')
  })
})
