import { RECORD_PROTOTYPE } from './constants'

type ArrayItem<T extends any[]> = T extends Array<infer TData> ? TData : never

type SelectKeyFn<T extends any[]> = (item: Readonly<ArrayItem<T>>) => string

/**
 *
 */
const groupBy = <T extends any[], TCallback extends SelectKeyFn<T>>(
  obj: T,
  callback: TCallback,
): Record<ReturnType<TCallback>, Array<ArrayItem<T>>> =>
  obj.reduce((acc, cur) => {
    const key = callback(cur)

    return {
      ...acc,
      [key]: key in acc ? [...acc[key], cur] : [cur],
    }
  }, {})

/**
 * Checks if value is a non-null object/record/array.
 */
const isObject = (value: any): value is NonNullable<object> =>
  typeof value === 'object' && value !== null

/**
 * Checks if value is a non-null object.
 */
const isRecord = (value: any): value is Record<any, any> =>
  isObject(value) && Object.getPrototypeOf(value) === RECORD_PROTOTYPE

export { groupBy, isObject, isRecord }
