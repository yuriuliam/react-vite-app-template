import React, { type FormEventHandler } from 'react'

import { useCallbackRef } from '../../hooks/useCallbackRef'
import { FormContextProvider } from './context'

import { useLogger } from '@/infra/logger/hooks/useLogger'

type FormProviderProps = {
  onSubmit: (data: Record<string, any>) => void | Promise<void>
}

const FORM_PROVIDER_NAME = 'Providers.Form'
const FORM_PROVIDER_LOGGER_NAME = 'providers:form'

const FormProvider: React.PFC<FormProviderProps> = ({ children }) => {
  const logger = useLogger(FORM_PROVIDER_LOGGER_NAME)

  const fields = React.useRef({})

  const registerField = useCallbackRef((fieldName: string) => {
    logger.log({
      title: 'registerField::()',
      content: `Adding field ${fieldName}`,
    })

    Reflect.set(fields.current, fieldName, null)
  })

  const onFormSubmit = useCallbackRef<FormEventHandler>(evt => {
    evt.preventDefault()
  })

  return (
    <FormContextProvider registerField={registerField}>
      <form onSubmit={onFormSubmit}>{children}</form>
    </FormContextProvider>
  )
}
FormProvider.displayName = FORM_PROVIDER_NAME

export { FormProvider }
