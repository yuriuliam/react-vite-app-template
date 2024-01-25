import React from 'react'

import { useComposedRef } from '@/infra/react/hooks/useComposedRef'

import { useFormField } from '../../hooks/useFormField'

type HTMLInputProps = React.ComponentProps<'input'> & {
  name: string
  label?: string | undefined
  persistent?: boolean | undefined
}

const INPUT_NAME = 'Forms.Components.Input'

const Input = React.forwardRef<HTMLInputElement, HTMLInputProps>(
  ({ name, label, persistent = false, ...rest }, ref) => {
    const internalRef = React.useRef<HTMLInputElement>(null)
    const inputRef = useComposedRef(internalRef, ref)

    const { defaultValue, fieldName, registerField } = useFormField(
      INPUT_NAME,
      name,
    )

    React.useEffect(() => {
      registerField({
        name: fieldName,
        ref: internalRef,
        persist: persistent,
        getValue: ref => ref.current.value,
        setValue: (ref, value) => void (ref.current.value = value),
        clearValue: ref => void (ref.current.value = ''),
      })
    }, [fieldName, registerField, persistent])

    return (
      <>
        {label && <label htmlFor={fieldName}>{label}</label>}

        <input
          {...rest}
          id={fieldName}
          name={name}
          defaultValue={defaultValue}
          ref={inputRef}
        />
      </>
    )
  },
)
Input.displayName = INPUT_NAME

export { Input }
