import { useId } from 'react'
import {
  useForm as useHookForm,
  FormProvider as HookFormContextProvider,
  useFormContext as useHookFormContext,
} from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@radix-ui/themes'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

const CREATE_FORM_ROOT_PREFIX = 'Form.Root'
const CREATE_FORM_INPUT_PREFIX = 'Form.Input'

type CreateFormFn = App.Domain.Forms.CreateFormFn

const createForm: CreateFormFn = ({ schema, ...formProps }, componentName) => {
  const useForm: App.Domain.Forms.UseFormHook = consumerName => {
    const formContextValue = useHookFormContext()

    if (!formContextValue) {
      throw new Error(
        `"${consumerName}" must be wrapped within "${componentName}" or contain a truthy initial value`,
      )
    }

    return formContextValue
  }

  const formRootName = `${CREATE_FORM_ROOT_PREFIX}.${componentName}`
  const formInputName = `${CREATE_FORM_INPUT_PREFIX}.${componentName}`

  const FormRoot: App.Domain.Forms.FormRootFC = ({
    children,
    defaultValues,
    onValidSubmit,
    onInvalidSubmit,
    ...rest
  }) => {
    const form = useHookForm({
      ...formProps,
      defaultValues: defaultValues || formProps.defaultValues,
      resolver: zodResolver(schema),
    })

    const handleFormSubmit = form.handleSubmit(onValidSubmit, onInvalidSubmit)

    const onFormSubmit = useCallbackRef<
      React.FormEventHandler<HTMLFormElement>
    >(evt => void handleFormSubmit(evt))

    return (
      <HookFormContextProvider {...form}>
        <form {...rest} onSubmit={onFormSubmit}>
          {children}
        </form>
      </HookFormContextProvider>
    )
  }
  FormRoot.displayName = formRootName

  const FormInput: App.Domain.Forms.FormInputFC = props => {
    const inputId = useId()
    const { formState, register: registerField } = useForm(formInputName)

    const {
      id,
      label,
      name,
      required,
      min,
      max,
      maxLength,
      minLength,
      validate,
      setValueAs,
      shouldUnregister,
      onChange,
      onBlur,
      disabled,
      deps,
      ...rest
    } = props

    const finalInputId = id || inputId

    const inputRegistry = registerField(name, {
      required,
      min,
      max,
      maxLength,
      minLength,
      validate,
      setValueAs,
      shouldUnregister,
      onChange,
      onBlur,
      disabled,
      deps,
    })

    const fieldError = formState.errors[name]
    const errorMessage = String(fieldError?.message || '')

    return (
      <>
        <TextField.Root {...rest} {...inputRegistry} id={finalInputId}>
          {label && (
            <TextField.Slot>
              <label htmlFor={finalInputId}>{label}</label>
            </TextField.Slot>
          )}
        </TextField.Root>

        <span>{errorMessage}</span>
      </>
    )
  }
  FormInput.displayName = formInputName

  const Form: App.Domain.Forms.FormComposer = Object.freeze({
    Root: FormRoot,
    Input: FormInput,
  })

  return [Form, useForm] satisfies ReturnType<CreateFormFn> as any
}

export { createForm }
