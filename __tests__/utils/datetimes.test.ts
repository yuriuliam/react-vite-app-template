import { describe, it, expect } from 'vitest'

import {
  formatToHour,
  formatToLogger,
  formatToTime,
} from '../../src/utils/datetimes'

describe('formatToHour', () => {
  it('should be able to format date-parsable values', () => {
    const myDate = new Date('2023-01-01T12:53:28')
    const myTimestamp = Date.parse('2023-01-01T12:53:28')

    const result1 = formatToHour(myDate, 'en-US')
    const result2 = formatToHour(myTimestamp, 'en-US')

    expect(result1).toEqual('12:53 PM')
    expect(result1).toEqual(result2)
  })

  it("should be able to format today's date if nullish or empty values are provided", () => {
    const result = formatToHour(undefined, undefined)

    expect(result).toBeTypeOf('string')
    expect(!result).toBeFalsy()
  })
})

describe('formatToLogger', () => {
  it('should be able to format date-parsable values', () => {
    const dateStr = '2023-01-01T12:53:28'

    const myDate = new Date(dateStr)
    const myTimestamp = Date.parse(dateStr)

    const result1 = formatToLogger(myDate, 'en-US')
    const result2 = formatToLogger(myTimestamp, 'en-US')

    expect(result1).toEqual('Sunday, 01/01/2023, 12:53 PM')
    expect(result2).toEqual(result1)
  })

  it("should be able to format today's date if nullish or empty values are provided", () => {
    const result = formatToLogger(undefined, undefined)

    expect(result).toBeTypeOf('string')
    expect(!result).toBeFalsy()
  })
})

describe('formatToTime', () => {
  it('should be able to format date-parsable values', () => {
    const myDate = new Date('2023-01-01T15:53:28')
    const myTimestamp = Date.parse('2023-01-01T15:53:28')

    const result1 = formatToTime(myDate, 'en-US')
    const result2 = formatToTime(myTimestamp, 'en-US')

    expect(result1).toEqual('15:53:28')
    expect(result1).toEqual(result2)
  })

  it("should be able to format today's date if nullish or empty values are provided", () => {
    const result = formatToTime(undefined, undefined)

    expect(result).toBeTypeOf('string')
    expect(!result).toBeFalsy()
  })
})
