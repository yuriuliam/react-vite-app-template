import { describe, it, expect } from 'vitest'

import { clockTime } from '@/infra/dateTimes/core/clockTime'

describe('formatToTime', () => {
  describe('parse', () => {
    it('should be able to format date-parsable values', () => {
      const myDate = new Date('2023-01-01T15:53:28')
      const myTimestamp = Date.parse('2023-01-01T15:53:28')

      const result1 = clockTime.parse(myDate)
      const result2 = clockTime.parse(myTimestamp)

      expect(result1).toBe('15:53:28')
      expect(result1).toBe(result2)
    })

    it("should be able to format today's date if nullish or empty values are provided", () => {
      const result = clockTime.parse(undefined)

      expect(result).toBeTruthy()
      expect(result).toBeTypeOf('string')
    })
  })

  describe('template', () => {
    it('should be able to template date-compatible values', () => {
      const myDate = new Date('2023-01-01T12:53:28')
      const myTimestamp = Date.parse('2023-01-01T12:53:28')

      const result1 = clockTime.template`It is ${myDate}`
      const result2 = clockTime.template`It is ${myTimestamp}`

      expect(result1).toBe('It is 12:53:28')
      expect(result1).toBe(result2)
    })
  })
})
