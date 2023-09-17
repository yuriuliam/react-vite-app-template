/* eslint-disable react-refresh/only-export-components */
import { createContext } from '../../internals/createContext'

interface IAuthContextData {
  signIn: () => Promise<void>
  signOut: () => void
  user: App.User | null
  token: App.UserToken | null
}

const [AuthContextProvider, useAuth] = createContext<IAuthContextData>(
  null,
  'Auth',
)

export { AuthContextProvider, useAuth }
