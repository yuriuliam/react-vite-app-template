import { describe, it, expect } from 'vitest'
import { z } from 'zod'

import { parseZodErrors } from '@/utils/zod'

describe('parseZodErrors', () => {
  it('should parse zod errors', () => {
    const model = z.string().nonempty('Should not be empty.')

    let modelError = null

    try {
      model.parse('')
    } catch (error) {
      modelError = error
    }

    expect(modelError).not.toBe(null)

    const result = parseZodErrors(modelError)

    expect(result).toHaveProperty('zod')
    expect(result.zod).toHaveLength(1)
    expect(result.zod.at(0)).toBe('Should not be empty.')
  })

  it('should ignore non-zod errors', () => {
    const error = new Error()

    const result = parseZodErrors(error)

    expect(Object.keys(result)).toHaveLength(0)
  })
})
