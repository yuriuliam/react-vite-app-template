declare global {
  /**
   * This is part of the app types. It describes a set of utility types,
   * avoiding possible typing gymnastics in `.ts(x)` files
   */
  declare namespace Utils {
    type Locale = string | string[]

    type DispatchFn = () => void
    type DispatchWithParamsFn<TArgs = any[]> = (...args: TArgs) => void
    type InitFn<TValue> = () => TValue

    type ObjectType = Record<any, any> | any[]

    type MaybePromise<T> = T | Promise<T>
  }
}

export = global
