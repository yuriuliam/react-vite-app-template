import { type Locale } from '@/infra/app/enums/locale'

declare global {
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

    type ArrayType<T> = T[] | readonly T[]

    /** Describes a possible array value. */
    type MaybeArray<T> = T extends ArrayType<infer U> ? U | T : T | T[]

    /** Describes a possible async value. */
    type MaybePromise<T> = T extends Promise<infer U> ? U | T : T | Promise<T>

    type ArrayValue<T> = T extends Array<infer V> | Readonly<Array<infer V>>
      ? V
      : never

    /** Retrieves a mutable version of a value. */
    type Mutable<T> = T extends Readonly<infer V> ? V : never

    type MergeObj<T1, T2> = Omit<T1, keyof T2> & T2
    type MergeObj<T1, T2, T3> = Omit<MergeObj<T1, T2>, keyof T3> & T3
    type MergeObj<T1, T2, T3, T4> = Omit<MergeObj<T1, T2, T3>, keyof T4> & T4

    type Recursive<T, K extends string | symbol | number = string> = {
      [key: K]: T | Recursive<T, K>
    }

    type TypedFn<TArgs extends any[], TResult> = (...args: TArgs) => TResult

    type PredicateFn<TInput, TOutput> = TypedFn<[value: TInput], TOutput>
    type IndexedPredicateFn<TInput, TOutput> = TypedFn<
      [value: TInput, index: number],
      TOutput
    >

    type CallbackFn = () => void

    /** Describes a factory method. */
    type FactoryFn<TValue> = () => TValue

    type InjectorFn = () => void

    type MutateFn<TValue> = (arg: TValue) => TValue

    type JsonReplacerFn = (key: string, value: any) => any

    /** Same as the factory, but semantically named to avoid confusion. */
    type InitFn<TValue> = FactoryFn<TValue>
    type CallbackWithReturn<TValue> = FactoryFn<TValue>

    type ObserverFn<TValue> = (arg: TValue) => void

    /** Describes a non-class non-null object. */
    type ObjectType = Record<any, any> | any[]

    /** Describes the key type of an ObjectType */
    type ObjectKey<T extends ObjectType> = T extends any[] ? number : keyof T
    type EntryKey<T extends ObjectType> = T extends any[] ? string : keyof T

    /** Describes the value type of an ObjectType */
    type ObjectValue<T extends ObjectType> =
      T extends Array<infer V> ? V : T[keyof T]

    type Timestamp = number

    type FormattedDateTime = string

    type IFormatDateTimeFn = (
      value?: Date | App.Timestamp | undefined,
      locale?: Locale | Locale[],
    ) => FormattedDateTime
  }
}

export = global
