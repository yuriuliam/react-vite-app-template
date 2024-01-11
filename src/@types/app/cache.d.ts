import { type SyncStorage } from 'jotai/vanilla/utils/atomWithStorage'

declare global {
  declare namespace App.Infra.Cache {
    interface ISyncStorage extends SyncStorage<any> {}
  }
}

export = global
