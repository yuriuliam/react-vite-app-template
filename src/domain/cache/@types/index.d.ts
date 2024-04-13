import {
  type ExtractAtomArgs,
  type PrimitiveAtom,
  type WritableAtom,
  type createStore,
} from 'jotai'
import { type atomWithStorage } from 'jotai/utils'
import {
  type SyncStringStorage,
  type SyncStorage,
} from 'jotai/vanilla/utils/atomWithStorage'

type AtomWithStorageFn = typeof atomWithStorage
type AtomWithStorageParams = Parameters<AtomWithStorageFn>
type SetStateAction<TAtom> = ExtractAtomArgs<PrimitiveAtom<TAtom>>[0]

type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result
type UseAtomFn<T> = () => [Awaited<T>, SetAtom<[SetStateAction<T>], void>]

type StoreAtom<T> = PrimitiveAtom<T> & { init: T }

declare global {
  declare namespace App.Domain.Cache {
    type Store = ReturnType<typeof createStore>

    interface ISyncStorage extends SyncStorage<any> {}

    type CreateAtomFn = <TValue>(
      defaultValue: TValue,
    ) => [atom: StoreAtom<TValue>, useAtom: UseAtomFn<TValue>]

    type CreateAppStoreFn = () => [appStore: Store, createAppAtom: CreateAtomFn]

    type CreateAtomWithStorageFn = <TValue>(
      storageKey: string,
      defaultValue: TValue,
      options?: AtomWithStorageParams[3] | undefined,
    ) => [
      atom: WritableAtom<TValue, [SetStateAction<TValue>], void>,
      useAtom: UseAtomFn<TValue>,
    ]

    type CreateSyncStorageFn<TPrefix extends string> = (
      baseStorage: SyncStringStorage,
      prefix?: TPrefix | null | undefined,
    ) => [
      syncStorage: ISyncStorage,
      createAtomWithStorageFn: CreateAtomWithStorageFn,
    ]
  }
}

export = global
