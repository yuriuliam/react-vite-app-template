import { createContext } from '@/infra/react/use-cases/createContext'

interface IAuthContextData {
  signIn: App.Modules.Auth.SignInFn
  signOut: App.Modules.Auth.SignOutFn
  isAuthenticated: boolean
  user: App.Modules.User.Domain.AppUser | null
  token: App.Models.Token | null
}

const AUTH_CONTEXT_NAME = 'Modules.Auth.Context'

const [AuthContextProvider, useAuth] = createContext<IAuthContextData>(
  null,
  AUTH_CONTEXT_NAME,
)

export { AuthContextProvider, useAuth }