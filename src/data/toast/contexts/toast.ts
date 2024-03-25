import { createContext } from '@/data/react/subjects/createContext'

interface IToastContextData {
  addToast: App.Domain.Toast.AddToastFn
  removeToast: App.Domain.Toast.RemoveToastFn
}

const TOAST_CONTEXT_NAME = 'Infra.Toast.ContextProvider'

const [ToastContextProvider, useToast] = createContext<IToastContextData>(
  null,
  TOAST_CONTEXT_NAME,
)

export { ToastContextProvider, useToast }
