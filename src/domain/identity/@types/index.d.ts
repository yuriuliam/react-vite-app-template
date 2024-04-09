import { createId } from '@paralleldrive/cuid2'

declare global {
  declare namespace App.Domain.Identity {
    type CreateCUID2 = () => string

    type IsCUID = (id: string) => boolean
  }
}

export = global
