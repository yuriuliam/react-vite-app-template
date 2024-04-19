import { type init } from '@paralleldrive/cuid2'

type InitCUIDParameters = Parameters<typeof init>
type InitCUIDOptions = InitCUIDParameters[0]

type InternalCUIDOptions = { prefix?: string | undefined }

declare global {
  declare namespace App.Domain.Identity {
    type CUIDGenOptions = InitCUIDOptions & InternalCUIDOptions
    type CreateCUIDFn = () => string
    type InitCUIDFn = (options: CUIDGenOptions) => CreateCUIDFn

    type IsCUIDFn = (id: string) => boolean
  }
}

export = global
