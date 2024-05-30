import React from 'react'
import * as ReactHookForm from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from '@radix-ui/themes'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'
import { useCount } from '@/shared/hooks/useCount'
import { clamp } from '@/shared/utils/numbers'

type CreateFormFn = App.Domain.Forms.CreateFormFn

const CREATE_FORM_ROOT_PREFIX = 'Form.Root'
const CREATE_FORM_INPUT_PREFIX = 'Form.Input'
const CREATE_FORM_ITERATOR_SCOPE_PREFIX = 'Form.IteratorScope'

const createForm: CreateFormFn = ({ schema, ...formProps }, componentName) => {
  const useForm: App.Domain.Forms.UseFormHook<any> = consumerName => {
    const formContextValue = ReactHookForm.useFormContext()

    if (!formContextValue) {
      throw new Error(
        `"${consumerName}" must be wrapped within "${componentName}" or contain a truthy initial value`,
      )
    }

    return formContextValue
  }

  const formRootName = `${CREATE_FORM_ROOT_PREFIX}.${componentName}`
  const formInputName = `${CREATE_FORM_INPUT_PREFIX}.${componentName}`
  const formIteratorScopeName = `${CREATE_FORM_ITERATOR_SCOPE_PREFIX}.${componentName}`

  const FormRoot: App.Domain.Forms.FormRootFC = ({
    children,
    defaultValues,
    onValidSubmit,
    onInvalidSubmit,
    ...rest
  }) => {
    const form = ReactHookForm.useForm({
      ...formProps,
      defaultValues: defaultValues || formProps.defaultValues,
      resolver: zodResolver(schema),
    })

    const handleFormSubmit = form.handleSubmit(onValidSubmit, onInvalidSubmit)

    const onFormSubmit = useCallbackRef<
      React.FormEventHandler<HTMLFormElement>
    >(evt => void handleFormSubmit(evt))

    return (
      <ReactHookForm.FormProvider {...form}>
        <form {...rest} onSubmit={onFormSubmit}>
          {children}
        </form>
      </ReactHookForm.FormProvider>
    )
  }
  FormRoot.displayName = formRootName

  const FormTextField: App.Domain.Forms.FormTextFieldFC = props => {
    const inputId = React.useId()
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

    const finalInputId = id || inputId

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
  FormTextField.displayName = formInputName

  const FormInput: App.Domain.Forms.FormInputFC = props => {
    const inputId = React.useId()
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

    const finalInputId = id || inputId

    return (
      <>
        {label && <label htmlFor={finalInputId}>{label}</label>}

        <input {...rest} {...inputRegistry} id={finalInputId} />

        <span>{errorMessage}</span>
      </>
    )
  }
  FormTextField.displayName = formInputName

  const FormIteratorScope: App.Domain.Forms.FormIteratorScopeFC = ({
    children,
    path = '',
    min,
    max,
  }) => {
    const form = useForm(formIteratorScopeName)
    const formValues = form.getValues(path)

    const [length, { decrease, increase }] = useCount(
      Array.isArray(formValues) ? formValues.length : 0,
      clamp({ value: min, min: 0 }),
      max,
    )

    React.useEffect(() => {
      if (!Array.isArray(formValues)) return

      form.setValue(path, formValues.slice(0, length))
    }, [form, formValues, length, path])

    const placeholder = React.useMemo(() => {
      return Array.from({ length }, () => path).map(
        (prefix, idx) => `${prefix}.${idx}`,
      )
    }, [length, path])

    if (!children) return <></>

    return (
      <>
        <button type="button" onClick={increase.bind(null, 1)}>
          +
        </button>

        <button type="button" onClick={decrease.bind(null, 1)}>
          -
        </button>

        {placeholder.map(children as any)}
      </>
    )
  }
  FormIteratorScope.displayName = formIteratorScopeName

  const Form: App.Domain.Forms.FormComposer<any> = Object.freeze({
    Root: FormRoot,
    TextField: FormTextField,
    Input: FormInput,
    IteratorScope: FormIteratorScope,
  })

  return [Form, useForm] satisfies ReturnType<CreateFormFn>
}

export { createForm }
