/* eslint-disable react-refresh/only-export-components */
import { createContext } from '@/internals/createContext'

import { COMPONENTS } from '@/utils/constants'

interface IAuthContextData {
  signIn: () => Promise<void>
  signOut: () => void
  isAuthenticated: boolean
  user: AppModels.User | null
  token: AppModels.UserToken | null
}

const [AuthContextProvider, useAuth] = createContext<IAuthContextData>(
  null,
  COMPONENTS.NAMES.AUTH,
)

export { AuthContextProvider, useAuth }
