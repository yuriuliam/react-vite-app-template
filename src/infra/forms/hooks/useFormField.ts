import React from 'react'

import dot from 'dot-object'

import { useForm } from '@/data/forms/contexts/form'

import { useCallbackRef } from '@/shared/hooks/useCallbackRef'

const useFormField = (consumerName: string, name: string) => {
  const {
    initialData,
    errors,
    scopePath,
    unregisterField,
    registerField,
    clearFieldError,
  } = useForm(`useFormField(${consumerName})`)

  if (!name) throw new Error(`name prop should be provided!`)

  const fieldName = React.useMemo(
    () => (scopePath ? `${scopePath}.${name}` : name),
    [name, scopePath],
  )

  const defaultValue = React.useMemo(
    () => dot.pick(fieldName, initialData),
    [fieldName, initialData],
  )

  const error = React.useMemo(() => errors[fieldName], [errors, fieldName])

  const clearError = useCallbackRef(() => {
    clearFieldError(fieldName)
  })

  React.useEffect(
    () => () => {
      unregisterField(fieldName)
    },
    [fieldName, unregisterField],
  )

  return {
    fieldName,
    registerField,
    defaultValue,
    clearError,
    error,
  }
}

export { useFormField }
