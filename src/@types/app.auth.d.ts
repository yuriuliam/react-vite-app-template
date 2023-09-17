declare global {
  declare namespace App {
    type UserToken = string

    type User = {
      id: string
      name: string
      email: string
    }

    type UserResponse = User & {
      token: UserToken
    }
  }
}

export = global
