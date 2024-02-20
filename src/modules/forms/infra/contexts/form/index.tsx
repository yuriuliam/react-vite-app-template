import React from 'react'

import dot from 'dot-object'

import { useCallbackRef } from '@/modules/react/infra/hooks/useCallbackRef'

import { FormContextProvider } from './context'

const FORM_PROVIDER_NAME = 'Modules.Form.Provider'

const FormProvider = React.forwardRef<
  App.Modules.Form.IFormHandlers,
  App.Modules.Form.FormProviderProps
>(({ children, initialData, onSubmit: onFormSubmit }, formRef) => {
  const fields = React.useRef<App.Modules.Form.FormField[]>([])
  const persistedData = React.useRef<Record<string, any>>({})

  const [errors, setErrors] = React.useState<App.Modules.Form.FormErrors>({})

  const getPersistedValue = useCallbackRef((fieldName: string) =>
    dot.pick(fieldName, persistedData.current),
  )

  const setPersistentValue = useCallbackRef((fieldName: string, value: any) => {
    dot.set(fieldName, value, persistedData.current)
  })

  const clearFieldValue = useCallbackRef(
    ({ clearValue, name, ref, path }: App.Modules.Form.FormField) => {
      if (!!clearValue || path) {
        setPersistentValue(name, '')
      }

      if (clearValue) {
        clearValue(ref, '')
        return
      }

      if (!path) return

      dot.set(path, '', ref)
    },
  )

  const getFieldByName = useCallbackRef((fieldName: string) =>
    fields.current.find(field => field.name === fieldName),
  )

  const getFieldValue = useCallbackRef(
    ({ ref, getValue, path }: App.Modules.Form.FormField) => {
      if (getValue) return getValue(ref)

      return path && dot.pick(path, ref)
    },
  )

  const setFieldValue = useCallbackRef(
    (
      { path, ref, setValue, name, persist }: App.Modules.Form.FormField,
      value: any,
    ) => {
      if (persist && (!!setValue || path)) {
        setPersistentValue(name, value)
      }

      if (setValue) {
        setValue(ref, value)
        return undefined
      }

      if (!path) return false

      dot.set(path, value, ref)
    },
  )

  const reset = useCallbackRef((data: Record<any, any> = {}) => {
    fields.current.forEach(({ name, ref, path, clearValue }) => {
      if (!!clearValue || path) {
        setPersistentValue(name, '')
      }

      if (clearValue) {
        clearValue(ref, data[name])
        return
      }

      if (!path) return

      dot.set(path, data[name] ? data[name] : '', ref)
    })
  })

  const setData = useCallbackRef((data: Record<string, any>) => {
    const fieldValue: Record<string, any> = {}

    fields.current.forEach(field => {
      fieldValue[field.name] = dot.pick(field.name, data)
    })

    Object.entries(fieldValue).forEach(([fieldName, value]) => {
      const field = getFieldByName(fieldName)

      if (!field) return

      setFieldValue(field, value)
    })
  })

  const setFormErrors = useCallbackRef(
    (formErrors: App.Modules.Form.FormErrors) => {
      const parsedErrors = dot.dot(formErrors)

      setErrors(parsedErrors)
    },
  )

  const parseFormData = useCallbackRef(() => {
    const data: Record<string, any> = { ...persistedData.current }

    fields.current.forEach(field => {
      const fieldValue = getFieldValue(field)
      data[field.name] = fieldValue
    })

    dot.object(data)

    return data
  })

  const handleSubmit = useCallbackRef<App.Modules.Form.FormHandleSubmitFn>(
    evt => {
      if (evt) evt.preventDefault()

      const data = parseFormData()

      void onFormSubmit(data, { reset }, evt)
    },
  )

  const registerField = useCallbackRef((field: App.Modules.Form.FormField) => {
    fields.current.push(field)

    const value = getPersistedValue(field.name)

    if (typeof value === 'undefined') return

    setFieldValue(field, value)
  })

  const unregisterField = useCallbackRef((fieldName: string) => {
    const fieldIndex = fields.current.findIndex(
      field => field.name === fieldName,
    )

    if (fieldIndex < 0) return

    fields.current.splice(fieldIndex, 1)
  })

  const clearFieldError = useCallbackRef((fieldName: string) => {
    setErrors(state => ({ ...state, [fieldName]: undefined }))
  })

  React.useImperativeHandle<any, App.Modules.Form.IFormHandlers>(
    formRef,
    () => ({
      getFieldValue(fieldName) {
        const field = getFieldByName(fieldName)

        if (!field) return false

        return getFieldValue(field)
      },
      setFieldValue(fieldName, value) {
        const field = getFieldByName(fieldName)

        if (!field) return false

        return setFieldValue(field, value)
      },
      getFieldError(fieldName) {
        return errors[fieldName]
      },
      setFieldError(fieldName, error) {
        setErrors(state => ({ ...state, [fieldName]: error }))
      },
      clearField(fieldName) {
        const field = getFieldByName(fieldName)

        if (!field) return

        clearFieldValue(field)
      },
      getErrors() {
        return errors
      },
      setErrors(formErrors) {
        setFormErrors(formErrors)
      },
      getData() {
        return parseFormData()
      },
      getFieldRef(fieldName) {
        const field = getFieldByName(fieldName)

        if (!field) return false

        return field.ref
      },
      setData(data) {
        setData(data)
      },
      reset(data) {
        reset(data)
      },
      submitForm() {
        handleSubmit()
      },
    }),
  )

  return (
    <FormContextProvider
      initialData={initialData}
      errors={errors}
      scopePath=""
      registerField={registerField}
      unregisterField={unregisterField}
      clearFieldError={clearFieldError}
      handleSubmit={handleSubmit}
    >
      {children}
    </FormContextProvider>
  )
})
FormProvider.displayName = FORM_PROVIDER_NAME

export { FormProvider }
