import { describe, it, expect } from 'vitest'

import { detailedDateTime } from '@/infra/dateTimes/core/detailedDateTime'

describe('detailedDateTime', () => {
  describe('parse', () => {
    it('should be able to format date-parsable values', () => {
      const dateStr = '2023-01-01T12:53:28'

      const myDate = new Date(dateStr)
      const myTimestamp = Date.parse(dateStr)

      const result1 = detailedDateTime.parse(myDate)
      const result2 = detailedDateTime.parse(myTimestamp)

      expect(result1).toBe('Sunday, 01/01/2023, 12:53 PM')
      expect(result2).toBe(result1)
    })

    it("should be able to format today's date if nullish or empty values are provided", () => {
      const result = detailedDateTime.parse(undefined)

      expect(result).toBeTruthy()
      expect(result).toBeTypeOf('string')
    })
  })

  describe('template', () => {
    it('should be able to template date-compatible values', () => {
      const myDate = new Date('2023-01-01T12:53:28')
      const myTimestamp = Date.parse('2023-01-01T12:53:28')

      const result1 = detailedDateTime.template`Current time: ${myDate}`
      const result2 = detailedDateTime.template`Current time: ${myTimestamp}`

      expect(result1).toBe('Current time: Sunday, 01/01/2023, 12:53 PM')
      expect(result1).toBe(result2)
    })
  })
})
