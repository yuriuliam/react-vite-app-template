import { type createStore } from 'jotai'
import { type SyncStorage } from 'jotai/vanilla/utils/atomWithStorage'

declare global {
  declare namespace App.Domain.Cache {
    type BaseStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

    type Store = ReturnType<typeof createStore>

    interface IStorageLike extends BaseStorage {}
    interface ISyncStorage extends SyncStorage<any> {}
  }
}

export = global
