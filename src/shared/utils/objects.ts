import { RECORD_PROTOTYPE } from '@/config/objects'

type PredicateFn<T> = (value: T, index: number, array: T[]) => boolean

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
 * Creates a matrix with a row of a given length.
 */
const chunkEvery = <T>(iterable: Iterable<T>, size: number) => {
  const chunks: T[][] = []

  for (let i = 0, value = Array.from(iterable); i < value.length; i += size) {
    chunks.push(value.slice(i, i + size))
  }

  return chunks
}

const count = <T>(array: T[], predicate: PredicateFn<T>) =>
  array.filter(predicate).length

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

/**
 * Returns a mixed array out of a given one.
 */
const mixed = <T>(array: T[]) => {
  const indexes = array.map((_, idx) => idx)

  const result: T[] = []

  while (indexes.length > 0) {
    const [item] = indexes.splice(indexes.indexOf(random(indexes)!), 1)

    result.push(array.at(item)!)
  }

  return result
}

/**
 * Omit given keys from an object.
 */
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

const parallel = <TA, TB>(arr1: App.ArrayType<TA>, arr2: App.ArrayType<TB>) => {
  if (arr1.length !== arr2.length) {
    throw new Error('the given objects have different lengths')
  }

  return arr1.map((item, idx) => [item, arr2[idx]] as [TA, TB])
}

/**
 * Retrieves a random item from a given iterable.
 *
 * It will return `undefined` if the same has no length.
 */
const random = <T>(iterable: Iterable<T>) => {
  const values = Array.from(iterable)

  return values.at(Math.floor(Math.random() * values.length))
}

/**
 * Creates a new array with the values of given indexes swapped.
 */
const swap = <T>(array: T[], fromIdx: number, toIdx: number) => {
  const item = array.at(fromIdx)!
  const length = array.length
  const diff = fromIdx - toIdx

  if (diff > 0) {
    return [
      ...array.slice(0, toIdx),
      item,
      ...array.slice(toIdx, fromIdx),
      ...array.slice(fromIdx + 1, length),
    ]
  }

  if (diff < 0) {
    const targetIdx = toIdx + 1
    return [
      ...array.slice(0, fromIdx),
      ...array.slice(fromIdx + 1, targetIdx),
      item,
      ...array.slice(targetIdx, length),
    ]
  }

  return array
}

const toCharCode = (iterable: Iterable<string>) =>
  Array.from(iterable).flatMap(part =>
    Array.from(part).map(c => c.charCodeAt(0)),
  )

export {
  areObjectsEqual,
  chunkEvery,
  count,
  isObject,
  isRecord,
  mixed,
  omitKeys,
  parallel,
  random,
  swap,
  toCharCode,
}
