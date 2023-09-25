/* eslint-disable react-refresh/only-export-components */
import { createContext } from '@/internals/createContext'

import { COMPONENTS } from '@/utils/constants'

interface IAuthContextData {
  signIn: () => Promise<void>
  signOut: () => void
  isAuthenticated: boolean
  user: App.User | null
  token: App.UserToken | null
}

const [AuthContextProvider, useAuth] = createContext<IAuthContextData>(
  null,
  COMPONENTS.NAMES.AUTH,
)

export { AuthContextProvider, useAuth }
