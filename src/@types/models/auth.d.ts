declare global {
  declare namespace AppModels {
    type UserToken = string

    type User = {
      id: string
      name: string
      email: string
    }

    type AuthResponse = User & {
      token: UserToken
    }
  }
}

export = global
