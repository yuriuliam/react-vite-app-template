import { createContext } from '@/infra/react/use-cases/createContext'

interface IAuthContextData {
  signIn: App.Modules.Auth.SignInFn
  signOut: App.Modules.Auth.SignOutFn
  isAuthenticated: boolean
  user: App.Modules.User.AppUser | null
  token: App.Domain.Shared.Token | null
}

const AUTH_CONTEXT_NAME = 'Modules.Auth.Context'

const [AuthContextProvider, useAuth] = createContext<IAuthContextData>(
  null,
  AUTH_CONTEXT_NAME,
)

export { AuthContextProvider, useAuth }
