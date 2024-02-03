import React from 'react'

import { FormProvider } from '../../contexts/form'
import { FormContextConsumer } from '../../contexts/form/context'

type HTMLFormProps = React.ComponentProps<'form'>

type FormProps = App.Infra.Form.FormProviderProps &
  Omit<HTMLFormProps, 'onSubmit'>

const FORM_NAME = 'Forms.Components.Form'

const Form = React.forwardRef<App.Infra.Form.IFormHandlers, FormProps>(
  ({ children, initialData = {}, onSubmit, ...props }, ref) => {
    return (
      <FormProvider ref={ref} initialData={initialData} onSubmit={onSubmit}>
        <FormContextConsumer>
          {({ handleSubmit }) => (
            <form {...props} onSubmit={handleSubmit}>
              {children}
            </form>
          )}
        </FormContextConsumer>
      </FormProvider>
    )
  },
)
Form.displayName = FORM_NAME

export { Form }
