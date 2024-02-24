import { createContext } from '@/infra/react/use-cases/createContext'

const FORM_CONTEXT_NAME = 'Modules.Form.Context'

const [FormContextProvider, useForm, FormContextConsumer] =
  createContext<App.Domain.Form.IFormContextData>(null, FORM_CONTEXT_NAME)

export { FormContextProvider, useForm, FormContextConsumer }
