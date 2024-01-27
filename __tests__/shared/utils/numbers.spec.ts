import { describe, it, expect } from 'vitest'

import {
  clamp,
  diff,
  formatPercentage,
  formatPrice,
  isBetween,
  isNumber,
} from '@/shared/utils/numbers'

describe('clamp', () => {
  it('should respect minimum value', () => {
    const value = 10
    const min = 20

    const result = clamp({ value, min })

    expect(result).toBe(20)
  })

  it('should respect maximum value', () => {
    const value = 80
    const max = 50

    const result = clamp({ value, max })

    expect(result).toBe(50)
  })
})

describe('diff', () => {
  it('should point the difference between a number expression', () => {
    const valueA = 30
    const valueB = -15
    const valueDiff = 45

    expect(diff(valueA, valueB)).toBe(valueDiff)
  })
})

describe('formatPercentage', () => {
  it('should format numbers to percentage when percentage is provided', () => {
    const myPercentage = 0.9895

    const result = formatPercentage(myPercentage)

    expect(result).toBe('98.95%')
  })

  it('should be able to receive locale as second parameter', () => {
    const myPercentage = 1.054

    const result = formatPercentage(myPercentage, 'pt-BR')

    expect(result).toBe('105,4%')
  })

  it('should be able to clamp a given fraction of digits', () => {
    const myPercentage = 0.9895237812
    const maxFractionDigit = 5

    const result1 = formatPercentage(myPercentage)
    const result2 = formatPercentage(myPercentage, 'en-US', maxFractionDigit)

    expect(result1).toBe('98.95%')
    expect(result2).toBe('98.95238%')
  })
})

describe('formatPrice', () => {
  it('should format a given price to USD when price is provided', () => {
    const myPrice = 20.05

    const result = formatPrice(myPrice, 'en-US')

    expect(result).toBe('$20.05')
  })

  it('should accept locale parameter once given', () => {
    const myPrice = 37.27

    const result = formatPrice(myPrice, 'en-GB')

    expect(result).toBe('US$37.27')
  })
})

describe('isBetween', () => {
  it('should check if number is between a given minimum and maximum', () => {
    const min = 30
    const max = 40
    const value = 35

    expect(isBetween(value, min, max)).toBeTruthy()
  })

  it('should return false if value is not a number', () => {
    const min = 30
    const max = 40
    const value = 'not-a-number'

    // @ts-expect-error meant to be a test
    expect(isBetween(value, min, max)).toBeFalsy()
  })

  it('should return false if value does not respects given minimum', () => {
    const min = 30
    const max = 40
    const value = 29

    expect(isBetween(value, min, max)).toBeFalsy()
  })

  it('should return false if value does not respects given maximum', () => {
    const min = 30
    const max = 40
    const value = 41

    expect(isBetween(value, min, max)).toBeFalsy()
  })
})

describe('isNumber', () => {
  it('should return true to number values', () => {
    const valueA = 30

    expect(isNumber(valueA)).toBeTruthy()
  })

  it('should return false to non-number values', () => {
    const valueA = 'not-a-number'
    const valueB = false

    expect(isNumber(valueA)).toBeFalsy()
    expect(isNumber(valueB)).toBeFalsy()
  })
})
