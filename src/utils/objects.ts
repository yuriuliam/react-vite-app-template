import { RECORD_PROTOTYPE } from './constants'

type SelectKeyFn<T extends any[]> = (
  item: Readonly<AppUtils.ObjectValue<T>>,
) => string | number | symbol

/**
 * Creates a Map out of an record/array.
 */
const asMap = <T extends AppUtils.ObjectType>(value: T) =>
  new Map(
    Object.entries(value) as Array<
      [AppUtils.EntryKey<T>, AppUtils.ObjectValue<T>]
    >,
  )

/**
 * Creates a Set out of an record/array.
 */
const asSet = <T extends AppUtils.ObjectType>(value: T) =>
  new Set<AppUtils.ObjectValue<T>>(
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
  }, {}) as Record<ReturnType<TCallback>, Array<AppUtils.ObjectValue<T>>>

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

export { asMap, asSet, defaultOrNull, groupBy, isObject, isRecord }
