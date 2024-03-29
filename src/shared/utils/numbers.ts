import { UINT16_MAX, UINT32_MAX, UINT8_MAX } from '../config/number'

/**
 * Clamps a value based on given minimum and maximum values.
 */
const clamp = ({
  value = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
}) => Math.max(min, Math.min(max, value))

/**
 * Returns the difference between given values.
 */
const diff = (numA: number, numB: number) => Math.abs(numA - numB)

/**
 * Checks if a given number is between a minimum and a maximum.
 */
const isBetween = (value: number, min: number, max: number) =>
  value >= min && value <= max

/**
 * Checks if value is a non-NaN number.
 */
const isNumber = (value: any): value is number =>
  typeof value === 'number' && !Number.isNaN(value)

/**
 * Checks if a number is a prime number.
 */
const isPrime = (value: number) => {
  if (value < 2) return false

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) return false
  }

  return true
}

const ordinal = (value: number) => {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const num = value % 100

  return value + (suffixes[(num - 20) % 10] || suffixes[num] || suffixes[0])
}

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const uint8 = (value: number) => clamp({ value, min: 0, max: UINT8_MAX })

const uint16 = (value: number) => clamp({ value, min: 0, max: UINT16_MAX })

const uint32 = (value: number) => clamp({ value, min: 0, max: UINT32_MAX })

export {
  clamp,
  diff,
  isBetween,
  isNumber,
  isPrime,
  ordinal,
  random,
  uint8,
  uint16,
  uint32,
}
