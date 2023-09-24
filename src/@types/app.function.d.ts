import type { Logger } from '@/services/logger'

declare global {
  /**
   * This is part of the app types.
   *
   * It describes the Function Utilities which can be globally used in the app.
   */
  declare namespace FunctionUtils {
    /** Describes an Asynchronous Method. */
    type AsyncFunctionLike = (...args: any[]) => Promise<any>

    /** Describes an Asynchronous Generator Method. */
    type AsyncGeneratorFunctionLike = (
      ...args: any[]
    ) => AsyncGenerator<any, any, any>

    /** Describes a Generator Method. */
    type GeneratorFunctionLike = (...args: any[]) => Generator<any, any, any>

    /** Describes a Method of any type. */
    type FunctionLike = (...args: any[]) => any

    /** Describes a Iterator-return Method. */
    type IteratorFunctionLike = (...args: any[]) => Iterator<any, any, any>
  }
}

export = global
