import { describe, it, expect } from 'vitest'

import { hoursAndMinutes } from '@/infra/dateTimes/core/hoursAndMinutes'

describe('hoursAndMinutes', () => {
  describe('parse', () => {
    it('should be able to parse date-compatible values', () => {
      const myDate = new Date('2023-01-01T12:53:28')
      const myTimestamp = Date.parse('2023-01-01T12:53:28')

      const result1 = hoursAndMinutes.parse(myDate)
      const result2 = hoursAndMinutes.parse(myTimestamp)

      expect(result1).toBe('12:53 PM')
      expect(result1).toBe(result2)
    })

    it("should be able to format today's date if nullish or empty values are provided", () => {
      const result = hoursAndMinutes.parse(undefined)

      expect(result).toBeTruthy()
      expect(result).toBeTypeOf('string')
    })
  })

  describe('template', () => {
    it('should be able to template date-compatible values', () => {
      const myDate = new Date('2023-01-01T12:53:28')
      const myTimestamp = Date.parse('2023-01-01T12:53:28')

      const result1 = hoursAndMinutes.template`Hello from ${myDate}`
      const result2 = hoursAndMinutes.template`Hello from ${myTimestamp}`

      expect(result1).toBe('Hello from 12:53 PM')
      expect(result1).toBe(result2)
    })
  })
})
