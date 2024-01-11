/* eslint-disable react-refresh/only-export-components */
import { createContext } from '@/data/react/createContext'

interface IFormContextData {
  registerField: (name: string) => void
}

const FORM_CONTEXT_NAME = 'App.Contexts.Forms'

const [FormContextProvider, useForm] = createContext<IFormContextData>(
  null,
  FORM_CONTEXT_NAME,
)

export { FormContextProvider, useForm }
