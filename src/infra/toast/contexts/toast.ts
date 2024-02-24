import { createContext } from '@/infra/react/use-cases/createContext'

interface IToastContextData {
  addToast: App.Domain.Toast.AddToastFn
  removeToast: App.Domain.Toast.RemoveToastFn
}

const TOAST_CONTEXT_NAME = 'Modules.Toast.Context'

const [ToastContextProvider, useToast] = createContext<IToastContextData>(
  null,
  TOAST_CONTEXT_NAME,
)

export { ToastContextProvider, useToast }
