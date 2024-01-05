/* eslint-disable react-refresh/only-export-components */
import { createContext } from '../../utils/createContext'

type SignInParams = {
  email: string
  password: string
}

interface IAuthContextData {
  signIn: (params: SignInParams) => Promise<void>
  signOut: () => void
  isAuthenticated: boolean
  user: App.Modules.User.UserModel | null
  token: App.Models.TokenModel | null
}

const AUTH_CONTEXT_NAME = 'App.Contexts.Auth'

const [AuthContextProvider, useAuth] = createContext<IAuthContextData>(
  null,
  AUTH_CONTEXT_NAME,
)

export { AuthContextProvider, useAuth }
export type { SignInParams }
