import React from 'react'

import dot from 'dot-object'

import { useForm } from '../contexts/form/context'

import { useCallbackRef } from '@/infra/react/hooks/useCallbackRef'

const useFormField = (consumerName: string, name: string) => {
  const {
    initialData,
    errors,
    scopePath,
    getPersistedFieldValue: getPersistedData,
    unregisterField,
    registerField,
    clearFieldError,
  } = useForm(`${consumerName}`)

  if (!name) throw new Error(`name prop should be provided!`)

  const fieldName = React.useMemo(
    () => (scopePath ? `${scopePath}.${name}` : name),
    [name, scopePath],
  )

  const defaultValue = React.useMemo(
    () => getPersistedData(fieldName) ?? dot.pick(fieldName, initialData),
    [getPersistedData, fieldName, initialData],
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
