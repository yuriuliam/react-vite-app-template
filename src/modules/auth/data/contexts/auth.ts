import { createContext } from '@/data/react/subjects/createContext'

interface IAuthContextData {
  signIn: App.Modules.Auth.SignInFn
  signOut: App.Modules.Auth.SignOutFn
  isAuthenticated: boolean
  user: App.Modules.Users.User | null
  token: App.Domain.Commons.Token | null
}

const AUTH_CONTEXT_NAME = 'Modules.Auth.Context'

const [AuthContextProvider, useAuth] = createContext<IAuthContextData>(
  null,
  AUTH_CONTEXT_NAME,
)

export { AuthContextProvider, useAuth }
