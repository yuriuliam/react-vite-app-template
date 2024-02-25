declare global {
  declare namespace App.Modules.Auth {
    type SignInFn = (params: AppAuthenticationParams) => Promise<void>
    type SignOutFn = () => void
  }
}

export = global
