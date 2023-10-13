import { describe, it, expect } from 'vitest'

import { clamp, formatPercentage, formatPrice } from '@/utils/numbers'

describe('clamp', () => {
  it('should respect minimum value', () => {
    const value = 10
    const min = 20

    const result = clamp(value, min)

    expect(result).toBe(20)
  })

  it('should respect maximum value', () => {
    const value = 80
    const max = 50

    const result = clamp(value, undefined, max)

    expect(result).toBe(50)
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
