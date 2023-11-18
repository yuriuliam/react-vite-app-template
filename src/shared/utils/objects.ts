type SelectKeyFn<T extends any[]> = (
  item: Readonly<App.Utils.ObjectValue<T>>,
) => string | number | symbol

const RECORD_PROTOTYPE = Object.getPrototypeOf({})

/**
 * Check if both objects have same keys and values.
 * If one ore both values are not object, it will check using `Object.is`
 *
 * @param a value A.
 * @param b value B.
 * @returns `true` if both have the same keys and values, otherwise `false`
 */
const areObjectsEqual = (a: unknown, b: unknown) => {
  if (Object.is(a, b)) return true

  const areBothArray = Array.isArray(a) && Array.isArray(b)
  const areBothRecord = isRecord(a) && isRecord(b)

  if (!areBothArray && !areBothRecord) return false

  const propsA = Object.keys(a)
  const propsB = Object.keys(b)

  const getFromA = Reflect.get.bind(Reflect, a)
  const getFromB = Reflect.get.bind(Reflect, b)

  return (
    propsB.length === propsA.length &&
    propsB.every(
      key => propsA.includes(key) && Object.is(getFromA(key), getFromB(key)),
    )
  )
}

/**
 * Creates a Map out of an record/array.
 */
const asMap = <T extends App.Utils.ObjectType>(value: T) =>
  new Map<App.Utils.EntryKey<T>, App.Utils.ObjectValue<T>>(
    Object.entries(value) as any,
  )

/**
 * Creates a Set out of an record/array.
 */
const asSet = <T extends App.Utils.ObjectType>(value: T) =>
  new Set<App.Utils.ObjectValue<T>>(
    Array.isArray(value) ? value : Object.values(value),
  )

/**
 * Returns the first item of an array/set without side-effects.
 * If the array/set is empty it returns `null`.
 */
const defaultOrNull = <T>(value: T[] | Set<T>) => {
  const obj = Array.from(value)

  return obj.length > 0 ? (obj.at(0) as T) : null
}

/**
 * Creates a record out of an array, grouping them by keys out of a callback.
 */
const groupBy = <T extends any[], TCallback extends SelectKeyFn<T>>(
  obj: T,
  selector: TCallback,
) =>
  obj.reduce((acc, cur) => {
    const key = selector(cur)

    return {
      ...acc,
      [key]: key in acc ? [...acc[key], cur] : [cur],
    }
  }, {}) as Record<ReturnType<TCallback>, Array<App.Utils.ObjectValue<T>>>

/**
 * Checks if value is a non-null object.
 */
const isObject = (value: any): value is NonNullable<object> =>
  typeof value === 'object' && value !== null

/**
 * Checks if value is a non-null record.
 */
const isRecord = (value: any): value is Record<any, any> =>
  isObject(value) && Object.getPrototypeOf(value) === RECORD_PROTOTYPE

export {
  areObjectsEqual,
  asMap,
  asSet,
  defaultOrNull,
  groupBy,
  isObject,
  isRecord,
}
