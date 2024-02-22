import { RECORD_PROTOTYPE } from '@/config/objects'

/**
 * Check if both objects have same keys and values.
 * If one ore both values are not object, it will check using `Object.is`
 *
 * @returns `true` if both have the same keys and values, otherwise `false`
 */
const areObjectsEqual = (a: unknown, b: unknown): boolean => {
  if (Object.is(a, b)) return true

  const areBothArray = Array.isArray(a) && Array.isArray(b)
  const areBothRecord = isRecord(a) && isRecord(b)

  if (!areBothArray && !areBothRecord) return false

  const [propsA, propsB] = [Object.keys(a), Object.keys(b)]

  if (propsB.length !== propsA.length) return false

  const [getFromA, getFromB] = [
    Reflect.get.bind(Reflect, a),
    Reflect.get.bind(Reflect, b),
  ]

  return propsB.every(
    key =>
      propsA.includes(key) && areObjectsEqual(getFromA(key), getFromB(key)),
  )
}

/**
 * Creates an array filled with generated items from a given factory callback.
 * It has it's length defined as well.
 */
const arrayOf = <T>(factoryFn: App.FactoryFn<T>, length = 10) =>
  new Array(length).fill(0).map(() => factoryFn())

/**
 * Creates a Map out of an record/array.
 */
const asMap = <T extends App.ObjectType>(value: T) =>
  new Map<App.EntryKey<T>, App.ObjectValue<T>>(Object.entries(value) as any)

/**
 * Creates a Set out of an record/array.
 */
const asSet = <T extends App.ObjectType>(value: T) =>
  new Set<App.ObjectValue<T>>(
    Array.isArray(value) ? value : Object.values(value),
  )

/**
 * Creates a matrix with a row of a given nth of items.
 */
const chunkEvery = <T>(iterable: Iterable<T>, size: number) => {
  const chunks: T[][] = []

  for (let i = 0, value = Array.from(iterable); i < value.length; i += size) {
    chunks.push(value.slice(i, i + size))
  }

  return chunks
}

/**
 * Checks if value is a non-null object.
 */
const isObject = (value: any): value is object =>
  typeof value === 'object' && value !== null

/**
 * Checks if value is a non-null record.
 */
const isRecord = (value: any): value is Record<any, any> =>
  isObject(value) && Object.getPrototypeOf(value) === RECORD_PROTOTYPE

const omitKeys = <TObj extends Record<any, any>, TKey extends keyof TObj>(
  obj: TObj,
  ...keys: TKey[]
) => {
  return Object.keys(obj).reduce(
    (acc, cur) =>
      keys.includes(cur as any) ? acc : { ...acc, [cur]: obj[cur] },
    {},
  ) as Omit<TObj, TKey>
}

/**
 * Retrieves a random item from a given iterable.
 *
 * It will return `null` if the iterable is empty.
 */
const random = <T>(iterable: Iterable<T>) => {
  const values = Array.from(iterable)

  return values.at(Math.floor(Math.random() * values.length)) ?? null
}

export {
  areObjectsEqual,
  arrayOf,
  asMap,
  asSet,
  chunkEvery,
  isObject,
  isRecord,
  omitKeys,
  random,
}
