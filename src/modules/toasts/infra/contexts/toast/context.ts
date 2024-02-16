/* eslint-disable react-refresh/only-export-components */
import { createContext } from '@/data/react/core/createContext'

interface IToastContextData {
  addToast: App.Modules.Toast.AddToastFn
  removeToast: App.Modules.Toast.RemoveToastFn
}

const TOAST_CONTEXT_NAME = 'Modules.Toast.Context'

const [ToastContextProvider, useToast] = createContext<IToastContextData>(
  null,
  TOAST_CONTEXT_NAME,
)

export { ToastContextProvider, useToast }
