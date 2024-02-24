import React from 'react'

import { FormContextConsumer } from '@/infra/forms/contexts/form'

import { FormProvider } from '../../contexts/form'

type HTMLFormProps = React.ComponentProps<'form'>

type FormProps = App.Domain.Form.FormProviderProps &
  Omit<HTMLFormProps, 'onSubmit'>

const FORM_NAME = 'Modules.Forms.Components.Form'

const Form = React.forwardRef<App.Domain.Form.IFormHandlers, FormProps>(
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
