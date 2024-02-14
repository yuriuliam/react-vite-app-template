/* eslint-disable react-refresh/only-export-components */
import { createContext } from '@/data/react/core/createContext'

const FORM_CONTEXT_NAME = 'Infra.Form.Context'

const [FormContextProvider, useForm, FormContextConsumer] =
  createContext<App.Infra.Form.IFormContextData>(null, FORM_CONTEXT_NAME)

export { FormContextProvider, useForm, FormContextConsumer }
