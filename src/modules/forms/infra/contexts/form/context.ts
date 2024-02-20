import { createContext } from '@/modules/react/data/core/createContext'

const FORM_CONTEXT_NAME = 'Modules.Form.Context'

const [FormContextProvider, useForm, FormContextConsumer] =
  createContext<App.Modules.Form.IFormContextData>(null, FORM_CONTEXT_NAME)

export { FormContextProvider, useForm, FormContextConsumer }
