/* eslint-disable react-refresh/only-export-components */
import { createContext } from '@/data/react/core/createContext'

interface IAuthContextData {
  signIn: (params: App.Modules.Auth.AppAuthenticationParams) => Promise<void>
  signOut: () => void
  isAuthenticated: boolean
  user: App.Modules.User.AppUser | null
  token: App.Models.TokenModel | null
}

const AUTH_CONTEXT_NAME = 'App.Contexts.Auth'

const [AuthContextProvider, useAuth] = createContext<IAuthContextData>(
  null,
  AUTH_CONTEXT_NAME,
)

export { AuthContextProvider, useAuth }
