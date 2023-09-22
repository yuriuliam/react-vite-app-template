import { describe, it, expect } from 'vitest'

import { formatPercentage, formatPrice } from '@/utils/numbers'

describe('formatPercentage', () => {
  it('should format numbers to percentage when percentage is provided', () => {
    const myPercentage = 0.9895

    const result = formatPercentage(myPercentage)

    expect(result).toEqual('98.95%')
  })

  it('should be able to receive locale as second parameter', () => {
    const myPercentage = 1.054

    const result = formatPercentage(myPercentage, 'pt-BR')

    expect(result).toEqual('105,4%')
  })

  it('should be able to clamp a given fraction of digits', () => {
    const myPercentage = 0.9895237812
    const maxFractionDigit = 5

    const result1 = formatPercentage(myPercentage)
    const result2 = formatPercentage(myPercentage, 'en-US', maxFractionDigit)

    expect(result1).toEqual('98.95%')
    expect(result2).toEqual('98.95238%')
  })
})

describe('formatPrice', () => {
  it('should format a given price to USD when price is provided', () => {
    const myPrice = 20.05

    const result = formatPrice(myPrice, 'en-US')

    expect(result).toEqual('$20.05')
  })

  it('should accept locale parameter once given', () => {
    const myPrice = 37.27

    const result = formatPrice(myPrice, 'en-GB')

    expect(result).toEqual('US$37.27')
  })

  it('should accept currency as third parameter once provided', () => {
    const myPrice = 20.05
    const myCurrency = 'GBP'

    const result = formatPrice(myPrice, [], myCurrency)

    expect(result).toEqual('£20.05')
  })
})
