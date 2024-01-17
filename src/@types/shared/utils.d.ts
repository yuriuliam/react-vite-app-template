declare global {
  /**
   * ### This is part of the app types.
   *
   * It describes a set of utility types,
   * avoiding possible typing gymnastics in `.ts(x)`
   * and repetitive declarations.
   */
  declare namespace App {
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

    /** Describes a possible-async value. */
    type MaybePromise<T> = T | Promise<T>

    /** Retrieves a mutable version of a value. */
    type Mutable<T> = T extends Readonly<infer V> ? V : T

    /** Generic Locale type argument, usually requested by Intl methods. */
    type Locale = string | string[]

    /** Describes a factory method. */
    type FactoryFn<TValue> = () => TValue

    /** Same as the factory, but semantically named to avoid confusion. */
    type InitFn<TValue> = FactoryFn<TValue>

    /** Describes a non-class non-null object. */
    type ObjectType = Record<any, any> | any[]

    /** Describes the key type of an ObjectType */
    type ObjectKey<T extends ObjectType> = T extends any[] ? number : keyof T
    type EntryKey<T extends ObjectType> = T extends any[] ? string : keyof T

    /** Describes the value type of an ObjectType */
    type ObjectValue<T extends ObjectType> =
      T extends Array<infer V> ? V : T[keyof T]

    type Timestamp = number
  }
}

export = global
