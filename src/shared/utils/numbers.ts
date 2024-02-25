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

export { clamp, diff, isBetween, isNumber }
