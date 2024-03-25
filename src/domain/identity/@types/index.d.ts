declare global {
  declare namespace App.Domain.Identity {
    type CreateUUIDFn = () => string

    type UUIDRef = { value: string }
  }
}

export = global
