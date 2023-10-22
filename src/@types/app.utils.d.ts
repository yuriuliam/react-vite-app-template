declare global {
  /**
   * This is part of the app types.
   *
   * It describes a set of utility types,
   * avoiding possible typing gymnastics in `.ts(x)`
   * and repetitive declarations.
   */
  declare namespace AppUtils {
    /** Generic Locale type argument, usually requested by Intl methods. */
    type Locale = string | string[]

    /** Describes a callback method. */
    type CallbackFn = () => void
    /** Describes a callback method with arguments. */
    type CallbackWithParamFn<TArg0> = (arg0: TArg0) => void
    type CallbackWithParamsFn<TArg0 extends any[]> = (...args: TArg0) => void
    type CallbackWithParamsFn<TArg0, TArg1> = (arg0: TArg0, arg1: TArg1) => void

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
    type ObjectValue<T extends ObjectType> = T extends Array<infer V>
      ? V
      : T[keyof T]

    /** Describes a possible-async value. */
    type MaybePromise<T> = T | Promise<T>
  }
}

export = global
