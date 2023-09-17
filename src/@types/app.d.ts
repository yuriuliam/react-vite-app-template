import type { Logger } from '../services/logger'

declare global {
  /**
   * Global instance of the App Logger.
   *
   * Check `scripts/globalLogger.ts`
   */
  var logger: Logger

  /**
   * This is part of the app types.
   */
  declare namespace FunctionHelpers {
    type AsyncFunctionLike = (...args: any[]) => Promise<any>

    type AsyncGeneratorFunctionLike = (
      ...args: any[]
    ) => AsyncGenerator<any, any, any>

    type GeneratorFunctionLike = (...args: any[]) => Generator<any, any, any>

    type FunctionLike = (...args: any[]) => any

    type IteratorFunctionLike = (...args: any[]) => Iterator<any, any, any>
  }

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
