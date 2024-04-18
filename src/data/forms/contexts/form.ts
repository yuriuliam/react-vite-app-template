import { createContext } from '@/data/react/subjects/createContext'

const FORM_CONTEXT_NAME = 'Infra.Form.ContextProvider'

const [FormContextProvider, useForm, FormContextConsumer] =
  createContext<App.Domain.Forms.IFormContextData>(null, FORM_CONTEXT_NAME)

export { FormContextProvider, useForm, FormContextConsumer }
