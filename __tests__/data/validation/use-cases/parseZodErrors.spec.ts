import { describe, it, expect } from 'vitest'
import { z } from 'zod'

import { parseZodErrors } from '@/data/validation/protocols/parseZodErrors'

describe('parseZodErrors', () => {
  it('should parse zod errors from simple models', () => {
    const model = z.string().min(1, 'Should not be empty.')

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

  it('should parse zod errors from object models', () => {
    const model = z.object({
      myProp: z.string().min(1, 'Prop should not be empty.').endsWith('bar'),
    })

    let modelError = null

    try {
      model.parse({ myProp: '' })
    } catch (error) {
      modelError = error
    }

    expect(modelError).not.toBe(null)

    const result = parseZodErrors(modelError)

    expect(result).toHaveProperty('myProp')
    expect(result.myProp).toHaveLength(2)
    expect(result.myProp.at(0)).toBe('Prop should not be empty.')
  })

  it('should ignore non-zod errors', () => {
    const error = new Error()

    const result = parseZodErrors(error)

    expect(Object.keys(result)).toHaveLength(0)
  })
})
