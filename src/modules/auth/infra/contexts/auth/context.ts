import { createContext } from '@/modules/react/data/core/createContext'

interface IAuthContextData {
  signIn: App.Modules.Auth.SignInFn
  signOut: App.Modules.Auth.SignOutFn
  isAuthenticated: boolean
  user: App.Modules.User.AppUser | null
  token: App.Models.TokenModel | null
}

const AUTH_CONTEXT_NAME = 'Modules.Auth.Context'

const [AuthContextProvider, useAuth] = createContext<IAuthContextData>(
  null,
  AUTH_CONTEXT_NAME,
)

export { AuthContextProvider, useAuth }
