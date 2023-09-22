import type { Logger } from '@/services/logger'

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
  declare namespace FunctionUtils {
    type AsyncFunctionLike = (...args: any[]) => Promise<any>

    type AsyncGeneratorFunctionLike = (
      ...args: any[]
    ) => AsyncGenerator<any, any, any>

    type GeneratorFunctionLike = (...args: any[]) => Generator<any, any, any>

    type FunctionLike = (...args: any[]) => any

    type IteratorFunctionLike = (...args: any[]) => Iterator<any, any, any>
  }
}

export = global
