import { describe, it, expect } from 'vitest'

import {
  formatToHoursAndMinutes,
  formatToLoggerTime,
  formatToTime,
} from '@/shared/utils/date-times'

describe('formatToHour', () => {
  it('should be able to format date-parsable values', () => {
    const myDate = new Date('2023-01-01T12:53:28')
    const myTimestamp = Date.parse('2023-01-01T12:53:28')

    const result1 = formatToHoursAndMinutes(myDate, 'en-US')
    const result2 = formatToHoursAndMinutes(myTimestamp, 'en-US')

    expect(result1).toBe('12:53 PM')
    expect(result1).toBe(result2)
  })

  it("should be able to format today's date if nullish or empty values are provided", () => {
    const result = formatToHoursAndMinutes(undefined, undefined)

    expect(result).toBeTruthy()
    expect(result).toBeTypeOf('string')
  })
})

describe('formatToLogger', () => {
  it('should be able to format date-parsable values', () => {
    const dateStr = '2023-01-01T12:53:28'

    const myDate = new Date(dateStr)
    const myTimestamp = Date.parse(dateStr)

    const result1 = formatToLoggerTime(myDate, 'en-US')
    const result2 = formatToLoggerTime(myTimestamp, 'en-US')

    expect(result1).toBe('Sunday, 01/01/2023, 12:53 PM')
    expect(result2).toBe(result1)
  })

  it("should be able to format today's date if nullish or empty values are provided", () => {
    const result = formatToLoggerTime()

    expect(result).toBeTruthy()
    expect(result).toBeTypeOf('string')
  })
})

describe('formatToTime', () => {
  it('should be able to format date-parsable values', () => {
    const myDate = new Date('2023-01-01T15:53:28')
    const myTimestamp = Date.parse('2023-01-01T15:53:28')

    const result1 = formatToTime(myDate, 'en-US')
    const result2 = formatToTime(myTimestamp, 'en-US')

    expect(result1).toBe('15:53:28')
    expect(result1).toBe(result2)
  })

  it("should be able to format today's date if nullish or empty values are provided", () => {
    const result = formatToTime(undefined, undefined)

    expect(result).toBeTruthy()
    expect(result).toBeTypeOf('string')
  })
})
